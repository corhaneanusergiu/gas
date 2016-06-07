//-----------------------------------------
//
// Demonstrating overloaded versions of offset()
// Output:
// Address of offset() overload 2
// (rowOffset, columnOffset, numRows) is: E2:E3
// Address of offset() overload 3 (rowOffset,
// columnOffset, numRows, numColumns)
// is: E11:I14
function offsetOverloadDemo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheets()[0],
      cell = sh.getRange('A1'),
      offsetRng2 = cell.offset(1, 4, 2),
      offsetRng3 = cell.offset(10, 4, 4, 5);
  Logger.log('Address of offset() overload 2 ' +
           '(rowOffset, columnOffset, numRows) is: '
           + offsetRng2.getA1Notation());
  Logger.log('Address of offset() overload 3 ' +
           '(rowOffset, columnOffset, numRows, ' +
           'numColumns) is: '
           + offsetRng3.getA1Notation());
}
