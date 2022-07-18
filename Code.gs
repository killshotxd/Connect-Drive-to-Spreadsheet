function allFiles() {
  var fi = DriveApp.getFiles();
  const ss = SpreadsheetApp.create("Drive Files");
  ss.appendRow(["Name", "Size", "URL", "Download"]);

  while (fi.hasNext()) {
    const file = fi.next();
    const fileInfo = [];
    fileInfo.push(file.getName());
    fileInfo.push(file.getSize());
    fileInfo.push(file.getUrl());
    fileInfo.push(file.getDownloadUrl());
    ss.appendRow(fileInfo);
  }
}
