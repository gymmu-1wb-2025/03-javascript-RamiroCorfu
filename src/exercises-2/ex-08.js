function sumlist(list) {
	let sum = 0;
	const n = list.length;
	for (let i = 0; i < n; i++) {
		const elem = list[i];
		sum += elem;
	}
	return sum;
}
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = sumlist(data);
console.log(`Die Summe ist: ${sum}`);
