var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
  "c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
  "ruby",
  "fortran"
]
var test = [
	"toto",
	"tata",
	"titi"
]
function randomWord(tab) {
	console.log(tab)
	tab = tab.replace('"','')
	console.log(tab)
  return tab[Math.floor(Math.random() * tab.length)]
}

export { randomWord }