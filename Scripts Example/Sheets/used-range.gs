//---------------------------------
// Used Range
//---------------------------------
function getUsedRangeAsArray(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sh = ss.getSheetByName(sheetName);
  // The getValues() method of the
  // Range object returns an array of arrays
  return sh.getDataRange().getValues();
}
// JavaScript does not distinguish between
// subroutines and functions.
// When the return statement is omitted,
// functions return undefined.
function test_getUsedRangeAsArray() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheetName = 'Sheet1',
      rngValues = getUsedRangeAsArray(sheetName);
  // Print the number of rows in the range
  // The toString() call to suppress the
  // decimal point so
  // that, for example, 10.0, is reported as 10
  Logger.log((rngValues.length).toString());
  // Print the number of columns
  // The column count will be the same
  // for all rows so only need the first row
  Logger.log((rngValues[0].length).toString());

  // Print the value in the first cell
  Logger.log(rngValues[0][0]);
}
