// Remove a named sheet from the
// active spreadsheet.
// Get an instance of the active
// spreadsheet.
// Get an instance of the sheet to remove.
// Activate the sheet to remove
// Call the spreadsheet instance method
// deleteActiveSheet.
function removeSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheetToRemove = ss.getSheetByName("AddedSheet");
  sheetToRemove.activate();
  ss.deleteActiveSheet();
  Browser.msgBox("SheetDeleted!");
}
