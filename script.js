const fastCheckbox = document.querySelector("#fast");
const cheapCheckbox = document.querySelector("#cheap");
const goodCheckbox = document.querySelector("#good");
let lastCheckbox = null;

function toggle(checkbox, otherCheckbox1, otherCheckbox2) {
  if (checkbox.checked && otherCheckbox1.checked && otherCheckbox2.checked) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = checkbox;
}

fastCheckbox.addEventListener("change", function () {
  toggle(fastCheckbox, cheapCheckbox, goodCheckbox);
});
cheapCheckbox.addEventListener("change", function () {
  toggle(cheapCheckbox, goodCheckbox, fastCheckbox);
});
goodCheckbox.addEventListener("change", function () {
  toggle(goodCheckbox, fastCheckbox, cheapCheckbox);
});
