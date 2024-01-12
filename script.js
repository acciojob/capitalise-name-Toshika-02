//your JS code here. If required.
 const upper = document.getElementByID("fname");
 upper.addEventListener("blur", function(){
	  upper.value = upper.value.toUpperCase();
 })
