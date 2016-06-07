// Add a new sheet to the active spreadsheet.
// Get an instance of the active spreadsheet.
// Call its insertSheet method.
// Call the setName method of the
// returned instance.
function addNewSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      newSheet;
  newSheet = ss.insertSheet();
  newSheet.setName("AddedSheet");
  Browser.msgBox("New Sheet Added!");
}
