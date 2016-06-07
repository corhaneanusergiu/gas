//---------------------------
// Selection Range
//-----------------------------
// Prints details about selected range in
// active spreadsheet
// To run, paste code into script editor,
// select some cells on any sheet,
// execute code and
// check log to see details
// Prints details about selected range
// in active spreadsheet
// To run, paste code into script editor,
// select some cells on any sheet,
// execute code and
// check log to see details
function printSelectionDetails() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      selectedRng = ss.getActiveRange();
  Logger.log('Selected Range Details:');
  Logger.log('-- Sheet: ' + selectedRng.getSheet().getSheetName());
  Logger.log('-- Address: ' + selectedRng.getA1Notation());
  Logger.log('-- Row Count: ' + ((selectedRng.getLastRow() + 1) - selectedRng.getRow()));
  Logger.log('-- Column Count: ' + ((selectedRng.getLastColumn() + 1) - selectedRng.getColumn()));
}
