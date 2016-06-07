//---------------------------------------
// Print Addresses And Formulas For Range
//---------------------------------------
function test_printSheetFormulas() {
  var sheetName = 'Formulas';
  printSheetFormulas(sheetName);
}
function printSheetFormulas(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sourceSheet = ss.getSheetByName(sheetName),
      usedRng = sourceSheet.getDataRange(),
      i,
      j,
      cell,
      cellAddr,
      cellFormula;
  for (i = 1; i <= usedRng.getLastRow(); i += 1) {
    for (j = 1; j <= usedRng.getLastColumn(); j += 1) {
      cell = usedRng.getCell(i, j);
      cellAddr = cell.getA1Notation();
      cellFormula = cell.getFormula();
      if (cellFormula) {
        Logger.log(cellAddr + ': ' + cellFormula);
      }
    }
  }
}
