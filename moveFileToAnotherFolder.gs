// Move file to another Google Drive Folder
 
function moveFileToAnotherFolder(fileID, targetFolderID) {
 
  var file = DriveApp.getFileById(fileID);
  
  // Remove the file from all parent folders
  var parents = file.getParents();
  while (parents.hasNext()) {
    var parent = parents.next();
    parent.removeFile(file);
  }
 
  DriveApp.getFolderById(targetFolderID).addFile(file);
  
}
