// Parse XML using Google Apps Script
// get the data from boardgamegeek

var url = 'http://www.boardgamegeek.com/xmlapi/boardgame/' + bggCode;
var bggXml = UrlFetchApp.fetch(url).getContentText();
var document = XmlService.parse(bggXml);
var root = document.getRootElement();

//set variables to data from bgg
var yearpublished = root.getChild('boardgame').getChild('yearpublished').getText();
var minplayers = root.getChild('boardgame').getChild('minplayers').getText();
var maxplayers = root.getChild('boardgame').getChild('maxplayers').getText();
var playingtime = root.getChild('boardgame').getChild('playingtime').getText();
var name = root.getChild('boardgame').getChild('name').getText();

// populate sheet with variable data
SpreadsheetApp.getActiveSheet().getRange(i+1,1).setValue(name);
SpreadsheetApp.getActiveSheet().getRange(i+1,4).setValue(minplayers);
SpreadsheetApp.getActiveSheet().getRange(i+1,5).setValue(maxplayers);
SpreadsheetApp.getActiveSheet().getRange(i+1,5).setValue(playingtime);
SpreadsheetApp.getActiveSheet().getRange(i+1,7).setValue(yearpublished);

//----------------------------------------
// Log the title and labels for the first page of blog posts on the Google Apps Developer blog.

function parseXml() {
  // url poate fi inlocuit cu adresa fisierului din google drive
  var url = 'http://googleappdeveloper.blogspot.com/atom.xml';
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var root = document.getRootElement();
  var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');

  var entries = document.getRootElement().getChildren('entry', atom);
  for (var i = 0; i < entries.length; i++) {
    var title = entries[i].getChild('title', atom).getText();
    var categoryElements = entries[i].getChildren('category', atom);
    var labels = [];
      for (var j = 0; j < categoryElements.length; j++) {
        labels.push(categoryElements[j].getAttribute('term').getValue());
      }
    Logger.log('%s (%s)', title, labels.join(', '));
  }
}

// Create and log an XML representation of the threads in your Gmail inbox.
function createXml() {
  var root = XmlService.createElement('threads');
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    var child = XmlService.createElement('thread')
        .setAttribute('messageCount', threads[i].getMessageCount())
        .setAtribute('isUnread', threads[i].isUnread())
        .setText(threads[i].getFirstMessageSubject());
    root.addContent(child);
  }
  var document = XmlService.createDocument(root);
  var xml = XmlService.getPrettyFormat().format(document);
  Logger.log(xml);
}
