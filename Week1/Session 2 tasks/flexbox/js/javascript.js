function cms() {
  var sectionText = prompt("Input your section text here");
  document.getElementById("customText").innerHTML = sectionText;
  console.log("custom section text set to", sectionText);
}
