function initAllHeightBase() {
	document.getElementById("calculateAreaButton").onclick = calculateArea;
}
	var calculateArea = function(h, base) {
		var h = document.getElementById("h").value;
		var base = document.getElementById("base").value;
		var area = (h * base)/2;
		console.log(area);
		document.getElementById("userInputArea").innerHTML = area;
	}
function initAllThreeSides() {
	document.getElementById("calculateAreaButtonThreeSides").onclick = calculateAreaThreeSides;
}
	var calculateAreaThreeSides = function(a,b,c) {
		var a = document.getElementById("a").value;
		console.log(a);
		var b = document.getElementById("b").value;
		var c = document.getElementById("c").value;
		var perimeter = (Number.parseInt(a) + Number.parseInt(b) + Number.parseInt(c))/2;
		console.log(perimeter);
		var areaThreeSidesRaw =  Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
		console.log(areaThreeSidesRaw);
		var areaThreeSidesMultiplied = areaThreeSidesRaw*10000; //multiply, Math.round & divide to determine the number of decimals showing
		console.log(areaThreeSidesMultiplied);
		var areaThreeSides = (Math.round(areaThreeSidesMultiplied))/10000;
		document.getElementById("userInputAreaThreeSides").innerHTML = areaThreeSides;
	}
