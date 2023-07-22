let filedetail = document.getElementById("filedetail");
let filenum = document.getElementById("filenum");

function uploadFiles() {
  let fileInput = document.getElementById("file-input");
  fileInput.click();
}

let fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  var files = event.target.files;
  var fileCount = files.length;
  filenum.innerHTML = "Files selected: " + fileCount;

  if (fileCount < 3) {
    alert("Please select at least 3 files.");
    fileCount = 0;
    filenum.innerHTML = "No file chosen";
    filedetail.innerHTML = "";
    return;
  }
  filedetail.innerHTML = "";
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    console.log("Uploading file:", file.name);

    var listItem = document.createElement("li");
    listItem.innerHTML = file.name;

    var removeButton = document.createElement("button");
    removeButton.textContent = "X";

    removeButton.addEventListener("click", function (event) {
      var listItem = event.target.parentNode;
      filedetail.removeChild(listItem);
      updateFileCount();
    });

    listItem.appendChild(removeButton);
    filedetail.appendChild(listItem);
    console.log(filedetail);
  }
}
function updateFileCount() {
  var fileListContainer = document.getElementById("filedetail");
  var fileCount = fileListContainer.childElementCount;
  var fileCountElement = document.getElementById("filenum");

  if (fileCount == 0) {
    fileCountElement.textContent = "No file chosen.";
  } else {
    fileCountElement.textContent =
      fileCount + (fileCount === 1 ? " file selected." : " files selected.");
  }
}
