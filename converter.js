
var text = readLine("Input link");
let result = text.indexOf("itemID%");
console.log("https://weidian.com/item.html?itemID=" + text.substring(result + 9, result + 19));
