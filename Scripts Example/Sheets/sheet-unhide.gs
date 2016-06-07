// Unhide all hidden sheets.
function sheetsUnhide() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheets = ss.getSheets();
  sheets.forEach(
    function (sheet) {
      if (sheet.isSheetHidden()) {
          sheet.showSheet();
      }
    });
}
