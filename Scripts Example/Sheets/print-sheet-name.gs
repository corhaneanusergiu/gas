// Print the names of all sheets in the active
// spreadsheet.
function printSheetNames() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheets = ss.getSheets(),
  i;
  for (i = 0; i < sheets.length; i += 1) {
  Logger.log(sheets[i].getName());
  }
}
