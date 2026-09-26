# Fortis STY 10 SSSP — Safety Professional Training (English / Español)

In-depth, self-paced training for **safety professionals coming onto Project Comstock STY 10**, rebuilt to follow the **Fortis Construction, Inc. Site-Specific Safety Plan v1.0 (06-04-2025)** page by page: the front matter, every numbered section from 1.0 to 40.0, and Appendices A–E, including Appendix D, the **Hazardous Energy Control Procedure (Rev 03)**.

## How it works
0. **Choose a language:** every visit opens on a language-choice screen, English or Español. The whole course (lessons, checks, exam, photo captions and certificate) runs in the language picked. Progress is saved separately for each language on that device, and the top bar has a **Language / Idioma** button to switch back. Spanish certificates carry "-ES-" in the certificate ID.
1. **Sign in:** first/last name, employee/EL #, position, company, project, direct supervisor.
2. **25 modules, 211 short lessons, in SSSP order.** Long sections are broken into one lesson per role or subsection (for example, the Safety Engineer/Representative and the Safety Administrator are separate lessons), so trainees read one portion at a time. Modules unlock one at a time. Every lesson shows an olive **"SSSP · section · page"** badge so the trainee can open the same page of the plan, and every module card shows the section and page range it covers.
3. **A check after every lesson:** each lesson ends with 3–6 questions, more for longer lessons, each testing a different point from that lesson (899 in total). Next stays locked until every answer is correct, and passing the last lesson's check completes the module.
4. **Hands-on activity:** Module 13, Lesson 1 (§15.0 High-Risk Mitigation) is a drag-and-drop exercise. Trainees drag each required document (Crane Lift Plan, Silica WECP, EEW Permit, MOP, Hot Work Permit, Confined Space Permit, Fall Protection & Rescue Plan, Don't Hit It form) onto its condition. On a phone they tap the document, then tap the condition. Next stays locked until all 8 are correct and the lesson check is passed.
5. **Final exam:** **50 questions** drawn evenly from every module out of the **899-question bank**, with shuffled answer order. **80%** to pass, unlimited retakes, and a review of missed questions that names the module to revisit.
6. **Certificate:** a Fortis-branded landscape certificate issued by **Donavan Griffen, Campus Site Lead, Fortis Construction, Inc.** (no signature line). It has Google-color corner stripes with white construction-icon cut-outs, "Project Comstock · STY 10" above "Certificate of Completion", the trainee's details centered around a teal **Fortis Safety Education** seal, and a faded mountain scene along the bottom. The certificate shown on screen at the end of the course and the downloaded PDF are drawn by the same code, so they are identical. It can also be printed, or emailed if you set an address.

Progress saves in the trainee's browser, so they can stop and resume on the same device. Plan on **7–8 hours**. (This version uses a new save key, so anyone who started an earlier version starts over.)

## Review mode (currently OFF)
`REVIEW_MODE: true` in `CONFIG` opens everything for reviewers: all modules and the final exam are unlocked, Next is never locked, the lesson bars at the top of each lesson jump straight to any lesson, and every lesson check has a **Show answers** button. A yellow "REVIEW MODE" bar shows at the top of every page, and review progress is saved separately from real trainee progress.
**Before trainees use the site**, set `REVIEW_MODE: false` (in `src/shell.html`, then `python3 build.py` and `python3 lock.py`), or ask Claude to rebuild it with review mode off. In review mode anyone can reach the exam and certificate without doing the lessons.

## Records library & Admin login
Every trainee who passes is sent to a **Google Sheet** (the records library) through a small Google Apps Script (`records/Code.gs`). The **Admin** button at the top right of the language page opens an admin login. The admin password is checked by the Google script, never in the page. Admins can search the records, see totals and **Download Excel (.xlsx)**, and there's a link to the Google Sheet itself.
- One-time setup: follow `records/SETUP_RECORDS_LIBRARY.md`, then put the web-app URL in `RECORDS_URL` in `CONFIG`, rebuild (`python3 build.py`, `python3 lock.py`) and upload `index.html`.
- Until `RECORDS_URL` is set, the Admin page says the library isn't connected, and nothing is sent.
- Each record includes: completed date/time, certificate ID, name, EL #, position, company, project, supervisor, language, score, number correct, mode (Live or Review) and course version. Records are de-duplicated by certificate ID, and a failed send retries the next time the trainee opens the course on that device.
- Records made while `REVIEW_MODE` is on are marked "Review" and hidden in the admin view by default.

## SSSP coverage map
Every section of the SSSP maps to a module. Pages are the SSSP's printed page numbers.

| # | Module | SSSP sections & pages | Lessons | Questions |
|---|--------|-----------------------|---------|-----------|
| 01 | Policy, Management & Enforceability | SSSP front matter · pp. 1–3 · Appendix E | 9 | 38 |
| 02 | Zero-Tolerance, Mission & Life Saving Rules | SSSP pp. 3–6 | 8 | 34 |
| 03 | Fortis Leadership Roles & Responsibilities | SSSP pp. 6–10 | 14 | 60 |
| 04 | Specialty Roles & Subcontractor Safety Responsibility | SSSP pp. 11–14 | 10 | 46 |
| 05 | Everyone's Responsibility, Safe Work Practices & Access Control | SSSP pp. 14–15 | 5 | 19 |
| 06 | 1.0 Assured Grounding & 2.0 Bulk Fuel Storage | SSSP §1.0–2.0 · pp. 15–16 | 3 | 12 |
| 07 | 3.0 Buried & Concealed Utilities and Appendix A "Don't Hit It" | SSSP §3.0 · pp. 16–18 · Appendix A pp. 51–53 | 14 | 52 |
| 08 | 4.0 Equipment Operation, 5.0 Discipline, 6.0 Drug & Alcohol, 7.0 Devices | SSSP §4.0–7.0 · pp. 18–20 | 8 | 32 |
| 09 | 8.0 Emergency Action & Response | SSSP §8.0 · pp. 20–22 | 10 | 37 |
| 10 | 9.0 Environmental Quality, 10.0 Equipment Qualification, 11.0 Hand & Power Tools | SSSP §9.0–11.0 · pp. 22–24 | 7 | 29 |
| 11 | 12.0 Hazard Communication & 13.0 Hazard Correction | SSSP §12.0–13.0 · pp. 24–27 | 8 | 34 |
| 12 | 14.0 Heat Illness Prevention & Appendix C | SSSP §14.0 · p. 27 · Appendix C pp. 56–61 | 8 | 40 |
| 13 | 15.0 High-Risk Mitigation, 16.0 Hot Work/Fire, 17.0 Incentive Program | SSSP §15.0–17.0 · pp. 27–29 | 5 | 24 |
| 14 | 18.0 Incident Management | SSSP §18.0 · pp. 29–32 | 9 | 43 |
| 15 | 19.0 JHA & Pre-Task Planning, Appendix B & 20.0 Observations | SSSP §19.0–20.0 · pp. 32–35 · Appendix B pp. 54–55 | 10 | 48 |
| 16 | 21.0 Lockout/Tagout, 22.0 Notification of Hazards, 23.0 PPE | SSSP §21.0–23.0 · pp. 35–37 | 9 | 41 |
| 17 | 24.0 Record Keeping, 25.0 Safety & Loss Control, 26.0 Safety Meetings, 27.0 Sanitation | SSSP §24.0–27.0 · pp. 37–39 | 6 | 27 |
| 18 | 28.0 Orientation, 29.0 Fatigue, 30.0 SSSP, 31.0 Steel Erection | SSSP §28.0–31.0 · pp. 40–42 | 10 | 39 |
| 19 | 32.0 Stretch & Flex, 33.0 Temporary Power, 34.0 Training | SSSP §32.0–34.0 · pp. 42–44 | 6 | 25 |
| 20 | 35.0 Walking/Working Pathways & Vehicle Traffic, 36.0 Weapons | SSSP §35.0–36.0 · pp. 44–45 | 5 | 22 |
| 21 | 37.0 Working at Height: Fall Protection & Ladders | SSSP §37.0 · pp. 46–48 | 7 | 29 |
| 22 | 38.0 Spotters, 39.0 High Winds, 40.0 Management of Change | SSSP §38.0–40.0 · pp. 48–50 | 5 | 21 |
| 23 | Appendix D HECP: Objective, Scope, Definitions & Roles (1.0–4.0) | Appendix D · HECP §1.0–4.0 · pp. 62–69 | 11 | 49 |
| 24 | Appendix D HECP: Training, Equipment & LOTO Procedures (5.0–7.0) | Appendix D · HECP §5.0–7.10 · pp. 70–77 | 12 | 49 |
| 25 | Appendix D HECP: Start-up, Shutdown, Testing & Controls (8.0–13.0) | Appendix D · HECP §8.0–13.0 · pp. 77–83 | 12 | 49 |

Front matter (pp. 1–15) covers the policy statement, management/supervision/Safety Committee/employee duties, Reservation of Rights, enforceability, zero-tolerance items, mission and Life Saving Rules, every Fortis and specialty role, subcontractor safety responsibility, safe work practices and site access. Appendix E (revision log) is covered in Module 01.

## Where the SSSP contradicts itself
The course points these out and teaches the more stringent reading:
- **Don't Hit It lead time:** 48 hrs / 2 days in Sec. 3, but 3 days in Sec. 19 → teach **3 days**.
- **CPR/First Aid/AED:** Foreman-level and above in Sec. 8, but Crew Lead-level and above in Sec. 34 → teach **Crew Lead and above**.
- **PTP sign-off:** "foreman" in Sec. 15, but "supervisor" in Sec. 19 → teach **supervisor-level approval before work**.

## Look & media
- **Fortis branding everywhere:** teal, slate, olive and red on every screen, with the Fortis logo in the header next to the course title, on the sign-in screen and on the certificate.
- **Icons:** each module has its own icon (gavel, hard hat, lock, crane, ladder and so on). They come from [Tabler Icons](https://tabler.io/icons) (MIT license) and are built into the page.
- **Photos:** lesson photos from 21 Wikimedia Commons files and the 9 GHS hazard pictograms (Module 11, §12.0 HazCom). They load from **Wikimedia Commons** (freely licensed or public domain), and each caption links to the file page showing its author and license. The sign-in background is the Virginia Range east of Reno.
- Photos need an internet connection. If one can't load, it hides itself and the lesson still works.
- To swap a photo, edit the lesson's `photos` list (`file` is the exact Wikimedia Commons file name, `cap` is the caption). Change it in both the English and Spanish files.

## Settings (`CONFIG` at the top of the script in `index.html`)
```js
COMPANY:      'Fortis Construction, Inc.',
ISSUER_NAME:  'Donavan Griffen',
ISSUER_TITLE: 'Campus Site Lead',
EMAILS:       [],      // e.g. ['safety@yourco.com'] — empty hides the Email button
PASS_PCT:     80,
EXAM_COUNT:   50,
```

## Password
The page asks for a password before anything loads (English/Spanish prompt, with a "Remember on this device" option). The course is **encrypted with the password** (AES-256, key from PBKDF2-SHA256), so someone who opens the page source or downloads the file sees only scrambled data, not the lessons.
- Share the password only with people who should take the training. It is deliberately **not** written in this README, because the repository is public.
- To change it, rebuild with `python3 build.py`, then run `python3 lock.py "NewPassword"` and upload the new `dist/index.html` as `index.html`. Anyone who ticked "Remember" will be asked for the new one.
- Trainee progress is not affected by the password.

## Publish on GitHub Pages
1. Create a repository and upload `index.html` and `README.md` to the root.
2. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose branch `main` and folder `/ (root)`, then Save.
3. After a minute or so the site is live at `https://<your-username>.github.io/<repo-name>/`.

The page only loads two outside resources: Google Fonts and the jsPDF library (cdnjs). If jsPDF can't load, the Download button falls back to Print → Save as PDF.

> **Heads-up:** GitHub Pages sites on free accounts are public. The password keeps the course content encrypted, but the address itself is public and anyone with the password can get in. Confirm with Fortis and the client that this level of protection is okay for the site-security content in the course (badging, photography, access, the control-lock color matrix, trade partner names).

## Spanish version
- Latin American Spanish, using the same site terms as the earlier LOTO Rev 4 Spanish training (for example Vivo-Muerto-Vivo, Persona Calificada, Mariscal de Energía, Dueño del Sistema).
- Fortis form and program names stay in English where crews will see them that way on site (Don't Hit It, Grab & Go, Stretch & Flex, All-Hands, PTP, JHA, SBS, MOP). The Spanish text explains each one.
- The Spanish footer notes that the English SSSP governs if the translation and the SSSP ever differ.
- It's a good idea to have a bilingual reviewer read the Spanish lessons before rollout.

## Editing content
The source files are in `src2/` and `index.html` is built from them with `python3 build.py` (it inlines the icons, logo and all content into one file):
- `src2/en_1.js … en_5.js` hold the English course and `src2/es_1.js … es_5.js` the Spanish, 5 modules per file. `src2/media.js` holds the hero image, GHS pictograms and matching sets.
- Each module has `id`, `icon` (a [Tabler](https://tabler.io/icons) name), `title`, `short`, `ref` (the SSSP sections/pages), `objectives` and `lessons`.
- Each lesson has `sec` (the SSSP badge), `h` (heading), `photos`, `html` and `q`, a list of questions written as `[question, [options], correct index, explanation]`.
- Keep the English and Spanish files in the same shape: same lessons, same question order and the same correct index.
- You can also edit `index.html` directly; the same `COURSE_EN.push(...)` / `COURSE_ES.push(...)` blocks are inside it.
- When the SSSP is revised, update `SOURCE_DOC`, then the affected lessons, `sec` badges and questions.

## Adding more matching activities
Matching sets live in `MATCH_SETS` (English and Spanish pairs). To add one to any lesson, put `<div class="dnd" data-set="yourSetName"></div>` in the lesson HTML and add a set with the same name.
