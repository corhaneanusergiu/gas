//-----------------------------------
// Protecting Sheets
//---------------------------------
// Identify a sheet by name to protect
// When this code runs, the lock icon
// will appear on the sheet name.
// Share the spreadsheet with another user
// as an editor. That user can edit all
// sheets except the protected one. The user
// can still edit the protected sheet.
function sheetProtect() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheetByName('ToProtect'),
      permissions = sh.getSheetProtection();
  ss.addEditor(<gmail address goes here>);
  permissions.setProtected(true);
  sh.setSheetProtection(permissions);
}
