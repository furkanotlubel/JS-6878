function london() {
  document.getElementById("tab1-content").classList.remove("hidden");
  document.getElementById("tab2-content").classList.add("hidden");
  document.getElementById("tab3-content").classList.add("hidden");
  document.getElementById("tab1-button").classList.add("tab1-button");
  document.getElementById("tab2-button").classList.remove("tab2-button");
  document.getElementById("tab3-button").classList.remove("tab3-button");
}

function paris() {
  document.getElementById("tab2-content").classList.remove("hidden");
  document.getElementById("tab1-content").classList.add("hidden");
  document.getElementById("tab3-content").classList.add("hidden");
  document.getElementById("tab1-button").classList.remove("tab1-button");
  document.getElementById("tab2-button").classList.add("tab2-button");
  document.getElementById("tab3-button").classList.remove("tab3-button");
}

function tokyo() {
  document.getElementById("tab3-content").classList.remove("hidden");
  document.getElementById("tab1-content").classList.add("hidden");
  document.getElementById("tab2-content").classList.add("hidden");
  document.getElementById("tab3-button").classList.add("tab3-button");
  document.getElementById("tab2-button").classList.remove("tab2-button");
  document.getElementById("tab1-button").classList.remove("tab1-button");
}
