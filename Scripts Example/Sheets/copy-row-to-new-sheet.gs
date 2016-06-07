//---------------------------------------------------
//Selectively Copy Rows From One Sheet To A New Sheet
//---------------------------------------------------
// Longer example
// Copy rows from one sheet named "Source" to
// a newly inserted
// one based on a criterion check of second
// column.
// Copy the header row to the new sheet.
// If Salary <= 10,000 then copy the entire row
function copyRowsToNewSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sourceSheet = ss.getSheetByName('Source'),
      newSheetName = 'Target',
      newSheet = ss.insertSheet(newSheetName),
      sourceRng = sourceSheet.getDataRange(),
      sourceRows = sourceRng.getValues(),
      i;
  newSheet.appendRow(sourceRows[0]);
  for (i = 1; i < sourceRows.length; i += 1) {
    if (sourceRows[i][1] <= 10000) {
      newSheet.appendRow(sourceRows[i]);
    }
  }
}
