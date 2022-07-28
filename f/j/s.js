function opene() {
  let m = [109, 97, 105, 108, 116, 111, 58];
  let e = [99, 111, 110, 116, 97, 99, 116, 64, 115, 97, 102, 119, 117, 114, 46, 99, 111, 109]

  e = numArrToS(e);

  window.open(`${numArrToS(m)}${e}`);

  showModal(e);
}

function sett() {
  let t = [116, 101, 108, 58];
  let el = document.getElementById("pl");

  el.setAttribute("href", `${numArrToS(t)}${getpn()}`);
}

function getpn() {
  let p = [-1, 6, 4, 1, 5, 7, 7, 0, 4, 1, 2];

  return p.map(y => y + 2).join('');
}

function pppn(pn) {
  return `${pn[0]}-${pn.slice(1,4)}-${pn.slice(4,7)}-${pn.slice(7,11)}`
}

function showModal(text) {
  let container = document.getElementById("modal-container");
  let modal = document.getElementById("modal-box");

  container.style.display = "flex";
  modal.innerHTML = text;
}

function closeModal() {
  let el = document.getElementById("modal-container");

  el.style.display = "none";
}

function onLoad() {
  sett();
}

function numArrToS(arr) {
  return arr.map(y => String.fromCharCode(y)).join('');
}
