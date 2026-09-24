# Fortis STY 10 SSSP — Safety Professional Training

In-depth, self-paced training for **safety professionals coming onto Project Comstock STY 10**, built from the **Fortis Construction, Inc. Site-Specific Safety Plan v1.0 (06-04-2025)**, including Appendix D, the **Hazardous Energy Control Procedure (Rev 03)**.

## How it works
1. **Sign in:** first/last name, employee/EL #, position, company, project, direct supervisor.
2. **16 modules** that unlock in order. Each opens with learning objectives, walks through the lessons (tables, "Safety Pro focus" callouts, job scenarios) and ends in a **4-question knowledge check**. All answers must be correct to move on.
3. **Final exam:** **50 questions** drawn evenly from every module out of a **135-question bank**, with shuffled answer order. **80%** to pass, unlimited retakes, and a review of missed questions that names the module to revisit.
4. **Certificate:** a Fortis-branded landscape PDF (teal, slate, olive, red), issued by **Donavan Griffen, Campus Site Lead, Fortis Construction, Inc.**, with no signature line. It can also be printed, or emailed if you set an address.

Progress saves in the trainee's browser, so they can stop and resume on the same device. Plan on **3–4 hours**.

## Modules
| # | Module |
|---|--------|
| 01 | The SSSP & Your Authority |
| 02 | Roles, Responsibilities & Safety Staffing |
| 03 | Culture, Orientation, Access & Meetings |
| 04 | Zero-Tolerance, Discipline & Conduct |
| 05 | Life Saving Rules & Hazard Control |
| 06 | Planning: JHA, PTP & High-Risk Work |
| 07 | "Don't Hit It": Buried & Concealed Utilities |
| 08 | Working at Height & Ladders Last |
| 09 | Equipment, Spotters, Traffic, Cranes & Steel |
| 10 | PPE & Dress Code |
| 11 | Hot Work, Fire, Electrical & Training Matrix |
| 12 | HECP Part 1: Program, Roles & Locks |
| 13 | HECP Part 2: Execution, Start-up & Testing |
| 14 | Emergency Action, Weather & Wind |
| 15 | Environment, Air, Heat, HazCom & Fatigue |
| 16 | Incident Management, Records & KPIs |

## Where the SSSP contradicts itself
The course points these out and teaches the more stringent reading:
- **Don't Hit It lead time:** 48 hrs / 2 days in Sec. 3, but 3 days in Sec. 19 → teach **3 days**.
- **CPR/First Aid/AED:** Foreman-level and above in Sec. 8, but Crew Lead-level and above in Sec. 34 → teach **Crew Lead and above**.
- **PTP sign-off:** "foreman" in Sec. 15, but "supervisor" in Sec. 19 → teach **supervisor-level approval before work**.

## Settings (`CONFIG` at the top of the script in `index.html`)
```js
COMPANY:      'Fortis Construction, Inc.',
ISSUER_NAME:  'Donavan Griffen',
ISSUER_TITLE: 'Campus Site Lead',
EMAILS:       [],      // e.g. ['safety@yourco.com'] — empty hides the Email button
PASS_PCT:     80,
EXAM_COUNT:   50,
KC_COUNT:     4,
```

## Publish on GitHub Pages
1. Create a repository and upload `index.html` and `README.md` to the root.
2. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose branch `main` and folder `/ (root)`, then Save.
3. After a minute or so the site is live at `https://<your-username>.github.io/<repo-name>/`.

The page only loads two outside resources: Google Fonts and the jsPDF library (cdnjs). If jsPDF can't load, the Download button falls back to Print → Save as PDF.

> **Heads-up:** GitHub Pages sites on free accounts are public. The course describes client-site security rules (badging, photography, access), the control-lock color matrix and trade partner names. Confirm with Fortis and the client that posting it publicly is okay, or host it privately.

## Editing content
- Lesson text is in the `MODULES` array (`objectives` plus HTML `slides`).
- Questions are in the `BANK` array: `m` = module id, `a` = index of the correct option, `w` = explanation. The **first four** questions tagged to a module are its knowledge check.
- When the SSSP is revised, update `SOURCE_DOC`, then the affected lessons and questions.
