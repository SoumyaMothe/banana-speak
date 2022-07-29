var buttontranslate=document.querySelector("#click");
var textInput=document.querySelector("#text");
var outputdiv=document.querySelector("#output");
outputdiv.innerText="soumya mothe";
console.log(buttontranslate);
buttontranslate.addEventListener("click",clickHandler)
function clickHandler()
{
    outputdiv.innerText="ajsjsjs"+textInput.value;
}