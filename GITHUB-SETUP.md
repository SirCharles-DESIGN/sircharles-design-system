# GitHub setup, the gentle way

Hi Bob — this is the no-prior-experience walkthrough. Read it once before you start so you know roughly where it's going. Each step is small. Every term is defined the first time it appears.

**What you'll end up with at the end:** a public web page at `https://github.com/SirCharles-DESIGN/sircharles-design-system` that contains every file in this folder. You'll paste that URL into Claude Design and you're done.

**Total time:** about 15–20 minutes. The first 5 are creating an account.

---

## What is GitHub, in 30 seconds

GitHub is a website where people store folders of files (mostly code, but really anything text-based — markdown, CSS, JSON, SVG, etc.) and share them publicly or privately. Each folder lives at its own URL. When other tools (like Claude Design) say "give me a GitHub link," they mean the URL of one of your folders.

**Two things to know:**
1. The technical word for "folder on GitHub" is **repository** (or "repo" for short). It's just a folder. We'll use both words.
2. You don't need to install anything. The whole thing works in a web browser. There's a desktop app and a command-line tool, but you can ignore both today.

---

## Step 1 — Create your GitHub account (5 minutes)

1. Go to **https://github.com/signup**
2. Enter your email — `blickityblock@protonmail.com` is fine.
3. Create a password.
4. Pick a **username**. This shows up in your repo URLs forever, so:
   - It should be short, all lowercase, no underscores if possible.
   - Suggested: `sircharles-design`, `sircharlesdesign`, `charleshurst`, or `chrlshrst`.
   - If your top pick is taken, GitHub will tell you immediately.
5. Solve the puzzle GitHub asks (click the donkey, that kind of thing).
6. Confirm your email — GitHub sends a launch code to your inbox; type it in.
7. On the "personalize" screen, you can click **Skip personalization** at the bottom — it's just preference questions. Pick **Free** plan.

You're in. The screen you land on is your **dashboard**. Don't worry about it; we won't use it.

### Optional but recommended: turn on two-factor auth

GitHub will prompt you about this within a week regardless. Easiest path:
- Click your avatar (top right) → **Settings** → **Password and authentication** → **Enable two-factor authentication**
- Choose **Authenticator app** and use your phone's authenticator (or 1Password if you use it)
- Save the recovery codes somewhere safe

This is a 2-minute side quest. If GitHub asks you for it later, do it then.

---

## Step 2 — Create the repository (2 minutes)

1. Look at the **top right** of any GitHub page. There's a `+` icon next to your avatar.
2. Click it → **New repository**.
3. Fill in:
   - **Repository name:** `sircharles-design-system`  *(use exactly this — Claude Design will reference it by this name)*
   - **Description:** `Brand and design system for SirCharles.DESIGN` (optional but nice)
   - **Public** ← select this. Claude Design needs to be able to read it without authentication.
   - **Add a README file** — leave this **unchecked**. We're going to upload our own README in a second.
   - Skip everything else (`.gitignore`, license — we don't need them right now).
4. Click the green **Create repository** button.

You're now looking at an **empty repository page**. There's a big block of instructions in the middle ("Quick setup — if you've done this before…"). Ignore all of it. We're going to use the friendly upload path.

---

## Step 3 — Upload the files (5 minutes)

This is the part that surprises beginners — you can literally drag your folder onto a webpage.

1. On your empty repo page, look for a small link near the middle: **"uploading an existing file"** *(it's part of the line "You can also import code from another repository using…")* or just click the **Add file** dropdown near the top right and choose **Upload files**.

   - If you don't see "uploading an existing file" link, the URL pattern is `https://github.com/SirCharles-DESIGN/sircharles-design-system/upload/main` — paste that into your browser.

2. You'll land on a page with a big dashed-line drop zone that says "Drag files here to add them to your repository."

3. **Open Finder**, navigate to the folder I built for you:
   ```
   SIRCHARLES.DESIGN/sircharles-design-system/
   ```

4. **Select the contents** of that folder (not the folder itself — the things INSIDE it). On macOS: open the folder, press `Cmd+A` to select all, then drag the selection onto the GitHub drop zone.
   - GitHub will preserve the subfolder structure (`brand/`, `tokens/`, `components/`, `assets/`). You don't need to upload one subfolder at a time.

5. Wait for the upload progress to finish (a few seconds — these are all tiny text files).

6. Scroll down. You'll see a **Commit changes** form. The word "commit" just means "save these uploads as a snapshot." Fill in:
   - **Commit message:** `Initial brand package`
   - Leave the description blank.
   - Leave the radio button on **Commit directly to the main branch**.

7. Click the green **Commit changes** button.

GitHub processes for a few seconds, then redirects you to your repository home page. You should now see all the files (`README.md`, `brand/`, `tokens/`, etc.) listed.

**If something didn't upload:** the most common issue is that the `assets/` folder didn't come through because of the binary file. Click **Add file → Upload files** again, drag just the `assets/` folder onto the drop zone, and commit a second time.

---

## Step 4 — Confirm the repo looks right (1 minute)

Your repo home page should show:

```
README.md
CLAUDE-DESIGN.md
GITHUB-SETUP.md
brand/
tokens/
components/
assets/
tailwind.config.js
```

The README.md content (the long one I wrote) should render as a nice formatted page below the file list. If you see that, you're done.

**Sanity click:** click into `brand/foundations.md` — you should see the colors and typography rendered as a readable document. Click into `components/button.html` — you'll see the raw HTML (GitHub doesn't run HTML, just shows it). That's fine. Claude Design knows what to do with all of it.

---

## Step 5 — Get the URL (10 seconds)

1. Look at your browser's address bar. It says:
   ```
   https://github.com/<your-username>/sircharles-design-system
   ```
2. Copy it.

That's the URL Claude Design wants.

---

## Step 6 — Paste it into Claude Design

1. Open https://claude.ai/design
2. Click into the "Set up your design system" form (or whatever the current entry point is — the form fields are described in [`CLAUDE-DESIGN.md`](./CLAUDE-DESIGN.md)).
3. Paste your URL into the **Link code on GitHub** field.
4. Fill in the other fields per [`CLAUDE-DESIGN.md`](./CLAUDE-DESIGN.md).
5. Save.

🎉

---

## Things that might trip you up (and how to recover)

### "I uploaded files but the folder structure is flat"

GitHub usually preserves folders when you drag from Finder. If it didn't, you can fix it without re-uploading: each file in GitHub has a **rename** option (click into the file, then click the pencil icon, then change the filename — you can include `/` in the new name to put it in a folder). But honestly, it's faster to delete the repo and start over: **Settings** → scroll to the very bottom → **Delete this repository** → then redo Step 2.

### "It says 'large file detected'"

The favicon PNG and the SVGs are all under 10KB, so this shouldn't happen with this package. If it does, GitHub is fine with files up to 100MB; you'd only see this if you accidentally uploaded a different folder.

### "Claude Design can't see my repo"

Double-check that the repo is **Public**, not Private. Go to your repo → **Settings** (top of the repo, not your account settings) → scroll down to "Danger Zone" → if it says "Change repository visibility," your repo is currently Private; click that button to make it Public.

### "I want to change something later"

Easy. Click into any file on GitHub, click the pencil icon (top right of the file content), edit, and click **Commit changes** at the bottom. You don't need to re-upload anything.

To upload a new file or new folder later: same Step 3 process — **Add file → Upload files** — and drop in just the new stuff.

### "I want to delete the repo and start over"

Repo home page → **Settings** (the gear icon at the top of the repo, between "Insights" and your account settings) → scroll to the very bottom → red "Delete this repository" button. It asks you to type the repo name to confirm.

---

## After this — what does Claude Design actually do with it?

Claude Design will read every file in the repo and use them to inform anything it generates for you. It pays special attention to:
- `brand/` for human-readable rules (color, type, voice)
- `tokens/` for machine-readable values
- `tailwind.config.js` for utility-class wiring
- `components/` for canonical implementations
- `assets/` for logos and the crown mark
- Anything in the `Notes` field of the form for hard rules ("don't introduce a second color")

You don't have to do anything else with the repo after this — Claude Design pulls from the live URL, so as long as you keep the repo public, it stays current.

---

## Glossary (the absolute minimum)

- **Repository / repo:** a folder on GitHub.
- **Public repo:** anyone with the URL can see it. (No one can *edit* it without permission, which is what we want.)
- **Commit:** saving a change. You write a short message describing what you did.
- **Main branch:** the canonical version of the repo. We're not using branches today — everything lives on `main`.
- **README.md:** the file GitHub renders on the repo home page. It's just markdown.

That's all the GitHub vocabulary you need today.
