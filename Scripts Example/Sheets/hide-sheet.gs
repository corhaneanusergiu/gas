// Hide a sheet specified by its name.
function sheetHide() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheetByName('ToHide');
  sh.hideSheet()
}
