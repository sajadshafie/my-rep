function req() {}

let myBody = document.querySelector("#container");

myBody.addEventListener("click", getClickposition, false);
// number();
function number(number, body) {
	for (i = 0; i < 100000; i++) {
		return i++;
	}
}

getClickposition();
function getClickposition(event) {
	var posX = event.clientX;
	var posY = event.clientY;

	console.log(posY, posX);
	console.log(window);
	if ((posX, posY)) {
		var myHop;
		// var myCounter = (document.createElement("SPAN").innerHTML = 1);
		var i;
		let myCounter = document.createElement("SPAN");
		let t = document.createTextNode(myBody.children.length + 1);
		myCounter.appendChild(t);
		myBody.appendChild(myCounter);
		myCounter.style.position = "absolute";
		myCounter.style.top = `${posY}px`;
		myCounter.style.left = `${posX}px`;
		myCounter.style.zIndex = myCounter.children.length;
		// for (i = 0; i <= 10000; i++) {
		// 	console.log(myCounter.children.length + 1);
		// 	if (myBody.children.length + 1 === i) {
		// 		myCounter.style.backgroundColor = "orange";
		// 		console.log("true if");
		// 		myCounter.style.transition = " transform 1s ease-in-out";
		// 		console.log(typeof i);
		// 	} else {
		// 		console.log(i);
		// 		i++;
		// 	}
		// 	return i;
		// }

		// console.log(hop);
		// console.log("true if");
		// console.log(myBody.children.span);
		console.log(typeof t);
	} else {
		console.log("false if");
	}
}

// console.log(posX, posY);
