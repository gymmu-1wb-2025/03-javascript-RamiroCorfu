function findmax(numbers) {
	let max = numbers[0];
	const n = numbers.length;
	for (let i = 1; i < n; i++) {
		if (numbers[i] > max) {
			max = numbers[i];
		}
	}
	return max;
}
const data = [3, 7, 2, 9, 5];
const result = findmax(data);
console.log(`Das Maximum ist: ${result}`);
