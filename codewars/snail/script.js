snail = function (array) {
	let arrayFinal = [];
	let manageReverse;
	while (array.length > 0) {
		//1
		arrayFinal.push(array.shift() || []);
		//2
		for (let i = 0; i < array.length; i++) {
			arrayFinal.push(array[i].pop() || []);
		}
		//3
		manageReverse =
			array[array.length - 1] == undefined ? [] : array.pop().reverse();
		arrayFinal.push(manageReverse);
		//4
		for (let i = array.length - 1; i >= 0; i--) {
			arrayFinal.push(array[i].shift() || []);
		}
	}

	// return arrayFinal.reduce((acc, val) => {
	// 	return acc.concat(val);
	// });

	return arrayFinal;
};

let matriz = [
	[1, 2, 3, 1],
	[4, 5, 6, 4],
	[7, 8, 9, 7],
	[7, 8, 9, 7],
];

console.log(snail(matriz));
