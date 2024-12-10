var tmp = document.querySelectorAll('td input');
tmp.forEach(element => {
var id = element.id;
var pattern = /^gv\d+_rd5_/;
if (pattern.test(id)) {
element.click();
}
});