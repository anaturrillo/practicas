/*
dados los arrays ordenados
[1,2,5,7,9]
[2,5,7,12,100]

crear un tercer array de todos los valores ordenados.
[1,2,2,5,5,7,7,12,100]

*/

const a = [1,1, 1, 1, 1, 1,1,2,5,7,9];
const b = [2,5,7,12,100];

function concatAndSort(a, b) {
	const resultA = a.concat(b).sort((a, b)=>a - b);

	const result = [];

	let aIndex = 0;
	let bIndex = 0;

	while(aIndex < a.length && bIndex < b.length) {

		if (a[aIndex] < b[bIndex]) {
			result.push(a[aIndex]);
			++aIndex
		} else {
			result.push(b[bIndex])
			++bIndex
		}
	}
	
	if (aIndex === a.length) {
		for (let i = bIndex; i < b.length; i++) {
			result.push(b[i]) 
		}
	} else {
		for (let i = aIndex; i < a.length; i++) {
			result.push(a[i]) 
		}
	}

	return result;

}
const result = concatAndSort(a, b)

console.log(result)

