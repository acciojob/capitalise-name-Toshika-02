//your JS code here. If required.

function converter(){
	const inp = document.getElementById("fname")
	inp.value = inp.value.toUpperCase();
}
 document.getElementById("fname").addEventListener("input", converter);
