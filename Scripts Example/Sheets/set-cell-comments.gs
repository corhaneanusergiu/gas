//----------------------
// Setting Cell Comments
//----------------------
function setCellComment(sheetName, cellAddress, cellComment) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheetByName(sheetName),
      cell = sh.getRange(cellAddress);
  cell.setNote(cellComment);
}
function test_setCellComment() {
  var sheetName = 'Sheet1',
      cellAddress = 'C10',
      cellComment = 'Comment added ' + Date();
  setCellComment(sheetName, cellAddress, cellComment);
}
