// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	var sum = a + b;
//
// 	return sum;
// }
//
// var theResult = doSomeMath();
//
// console.log("The result: ", theResult);


function giveMeEms(pixel){

	var baseValue = 16;

	function doSomeMath(){
		return pixel/baseValue;

	}
	return doSomeMath;
}

var smallSize = giveMeEms(1920);

console.log("Small Size: ", smallSize());
