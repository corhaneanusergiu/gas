// Write a list of hidden sheet names to log.
function listHiddenSheetNames() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheets = ss.getSheets();
  sheets.forEach(
    function (sheet) {
      if (sheet.isSheetHidden()) {
          Logger.log(sheet.getName());
      }
   });
}
