//------------------------------------
// Add Colours To Range In First Sheet
//-------------------------------------
// Select a block of cells in the first sheet.
// Use Range methods to set both the font and
// background colors.
function addColorsToRange() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheets = ss.getSheets(),
      sh1 = sheets[0],
      addr = 'A4:B10',
      rng;
  // getRange is overloaded. This method can
  // also accept row and column integers
  rng = sh1.getRange(addr);
  rng.setFontColor('green');
  rng.setBackgroundColor('red');
}
