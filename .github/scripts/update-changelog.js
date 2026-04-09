const Anthropic = require("@anthropic-ai/sdk");
const { google } = require("googleapis");
const { execSync } = require("child_process");

async function main() {
  // 1. Ambil informasi dari environment
  const prTitle = process.env.PR_TITLE || "";
  const prBody = process.env.PR_BODY || "";
  const prNumber = process.env.PR_NUMBER || "";
  const prAuthor = process.env.PR_AUTHOR || "";
  const repoName = process.env.REPO_NAME || "";
  const baseSha = process.env.BASE_SHA || "";
  const headSha = process.env.HEAD_SHA || "";

  // 2. Ambil git diff
  let diff = "";
  try {
    diff = execSync(`git diff ${baseSha} ${headSha} --stat`).toString();
    const fullDiff = execSync(
      `git diff ${baseSha} ${headSha} -- . ':(exclude)package-lock.json' ':(exclude)yarn.lock'`
    ).toString();
    diff += "\n\nDetail perubahan:\n" + fullDiff.substring(0, 8000);
  } catch (e) {
    diff = "Tidak bisa mengambil diff.";
  }

  // 3. Minta Claude untuk generate changelog
  const anthropic = new Anthropic.default();
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: `Kamu adalah asisten yang membuat changelog profesional dalam Bahasa Indonesia.

Berikut informasi PR yang baru di-merge:
- Repo: ${repoName}
- PR #${prNumber}: ${prTitle}
- Author: ${prAuthor}
- Deskripsi PR: ${prBody || "(tidak ada deskripsi)"}

Git diff:
${diff}

Buatkan changelog singkat dan jelas dengan format:
- Fitur Baru: (jika ada)
- Perbaikan Bug: (jika ada)  
- Perubahan Lain: (jika ada)

Maksimal 5 poin total. Gunakan bahasa yang mudah dipahami non-developer.`,
      },
    ],
  });

  const changelog = message.content[0].text;

  // 4. Update Google Docs
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ["https://www.googleapis.com/auth/documents"],
  });

  const docs = google.docs({ version: "v1", auth });
  const docId = process.env.GOOGLE_DOC_ID;

  // Ambil isi dokumen sekarang
  const doc = await docs.documents.get({ documentId: docId });
  const endIndex = doc.data.body.content.slice(-1)[0].endIndex - 1;

  // Format entry baru
  const date = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const repoShortName = repoName.split("/")[1] || repoName;
  const newEntry = `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📁 ${repoShortName}  |  PR #${prNumber} — ${prTitle}\n🗓 ${date}  |  👤 ${prAuthor}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${changelog}\n`;

  // Insert ke dokumen
  await docs.documents.batchUpdate({
    documentId: docId,
    requestBody: {
      requests: [
        {
          insertText: {
            location: { index: endIndex },
            text: newEntry,
          },
        },
      ],
    },
  });

  console.log("✅ Changelog berhasil diupdate di Google Docs!");
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
