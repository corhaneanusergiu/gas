//-----------------------
// Removing Cell Comments
//-----------------------
// To remove a comment, just pass an empty string
// to the setNote() method.
function removeCellComment(sheetName, cellAddress) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheetByName(sheetName),
      cell = sh.getRange(cellAddress);
  cell.setNote('');
}
function test_removeCellComment() {
  var sheetName = 'Sheet1',
      cellAddress = 'C10';
  removeCellComment(sheetName, cellAddress);
}
