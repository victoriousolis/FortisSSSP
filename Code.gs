/**
 * Fortis STY 10 SSSP Training — Records Library (Google Apps Script)
 * ------------------------------------------------------------------
 * Paste this whole file into Extensions → Apps Script of a Google Sheet.
 * 1. Change ADMIN_PASSWORD below to the password admins will type in the course.
 * 2. Run the "setup" function once (Run ▶, approve the permissions).
 * 3. Deploy → New deployment → Web app → Execute as: Me · Who has access: Anyone → Deploy.
 * 4. Send the Web app URL to whoever builds the course, so it can be added to the site.
 *
 * The training site sends one row per passed exam. Admins log in from the course's
 * Admin button; the password is checked here, never in the web page.
 */

const ADMIN_PASSWORD = 'CHANGE-ME-before-deploying';   // ← set your admin password
const SUBMIT_TOKEN   = 'WC8uUqPcfWbv1mwQiJT3b-Kc';     // must match CONFIG.RECORDS_TOKEN in the course (leave as is)
const SHEET_NAME     = 'Completions';

const HEADERS = ['Received (server time)', 'Completed', 'Certificate ID', 'First name', 'Last name', 'Employee / EL #',
  'Position', 'Company', 'Project', 'Direct supervisor', 'Language', 'Score %', 'Correct', 'Total questions',
  'Mode', 'Course version'];
const FIELDS = ['completedAt', 'certId', 'first', 'last', 'el', 'position', 'company', 'project', 'supervisor',
  'lang', 'pct', 'right', 'total', 'mode', 'version'];

/** Run once from the editor: creates the Completions tab with headers. */
function setup() {
  const sh = sheet_();
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  sh.setFrozenRows(1);
  sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#004c54').setFontColor('#ffffff');
  sh.autoResizeColumns(1, HEADERS.length);
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Keep cells as plain text and block spreadsheet formula injection (=, +, -, @ at the start).
function clean_(v, max) {
  let s = String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max || 120);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

/** Course → sheet: one completion record (sent as text/plain JSON). */
function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: 'bad-json' }); }
  if (!d || d.token !== SUBMIT_TOKEN) return json_({ ok: false, error: 'bad-token' });
  if (!/^FORTIS-STY10-SSSP-(EN|ES)-\d{8}-[A-Z0-9]{4}$/.test(String(d.certId || ''))) return json_({ ok: false, error: 'bad-cert-id' });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = sheet_();
    if (sh.getLastRow() === 0) setup();
    // Skip duplicates (the course retries until it gets an "ok").
    const n = sh.getLastRow() - 1;
    if (n > 0) {
      const ids = sh.getRange(2, 3, n, 1).getValues();
      for (let i = 0; i < ids.length; i++) if (ids[i][0] === d.certId) return json_({ ok: true, duplicate: true });
    }
    const row = [new Date()].concat(FIELDS.map(function (f) {
      if (f === 'pct' || f === 'right' || f === 'total') { const x = Number(d[f]); return isFinite(x) ? x : ''; }
      if (f === 'completedAt') { const t = new Date(d[f]); return isNaN(t) ? '' : t; }
      return clean_(d[f]);
    }));
    sh.appendRow(row);
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

/** Admin → list all records (password checked here). */
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action !== 'list') return json_({ ok: true, service: 'Fortis STY 10 SSSP training records' });
  if (ADMIN_PASSWORD === 'CHANGE-ME-before-deploying' || p.key !== ADMIN_PASSWORD) {
    Utilities.sleep(1500);                       // slow down password guessing
    return json_({ ok: false, error: 'bad-password' });
  }
  const sh = sheet_();
  const n = sh.getLastRow() - 1;
  const rows = n > 0 ? sh.getRange(2, 1, n, HEADERS.length).getValues() : [];
  const tz = Session.getScriptTimeZone();
  const out = rows.map(function (r) {
    return r.map(function (v) { return v instanceof Date ? Utilities.formatDate(v, tz, 'yyyy-MM-dd HH:mm') : v; });
  });
  return json_({ ok: true, headers: HEADERS, rows: out, sheetUrl: SpreadsheetApp.getActiveSpreadsheet().getUrl() });
}
