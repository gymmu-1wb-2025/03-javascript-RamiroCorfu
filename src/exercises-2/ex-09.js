function average(numbers) {
	let sum = 0;
	const n = numbers.length;
	for (let i = 0; i < n; i++) {
		sum += numbers[i];
	}
	return sum / numbers.length;
}
const data = [1, 2, 3, 4, 5];
const result = average(data);
console.log(`Der Durchschnitt ist: ${result}`);
