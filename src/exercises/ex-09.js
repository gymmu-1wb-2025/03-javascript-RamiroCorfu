const start = Number(process.argv[2]);
const end = Number(process.argv[3]);

function f(x) {
	return 4 * x - 1;
}

for (let i = start; i <= end; i++) {
	const result = f(i);
	console.log(`Für x=${i} ist f(${i}) = ${result}`);
}
