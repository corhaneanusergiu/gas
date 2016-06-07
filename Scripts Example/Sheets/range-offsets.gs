//---------------------------
// Range Offsets
//----------------------------
// The Spreadsheet method getSheets() returns
// an array.
// The code "ss.getSheets()[0]"
// returns the first sheet and is equivalent to
// "ActiveWorkbook.Worksheets(1)" in VBA.
// Note that the VBA version is 1-based!
function offsetDemo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheets()[0],
      cell = sh.getRange('B2');
  cell.setValue('Middle');
  cell.offset(-1,-1).setValue('Top Left');
  cell.offset(0, -1).setValue('Left');
  cell.offset(1, -1).setValue('Bottom Left');
  cell.offset(-1, 0).setValue('Top');
  cell.offset(1, 0).setValue('Bottom');
  cell.offset(-1, 1).setValue('Top Right');
  cell.offset(0, 1).setValue('Right');
  cell.offset(1, 1).setValue('Bottom Right');
}
