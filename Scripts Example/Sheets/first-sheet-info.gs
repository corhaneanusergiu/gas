function firstSheetInfo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
  sheets = ss.getSheets(),
  // getSheets() returns an array
  // JavaScript arrays are always zero-based
  sh1 = sheets[0];
  Logger.log(sh1.getName());
  // getDataRange is analagous to UsedRange
  //in VBA
  // getA1Notation() is functional equivalent to
  // Address in VBA
  Logger.log(sh1.getDataRange().getA1Notation());
}
