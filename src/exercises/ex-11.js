const argc = process.argv.length;

function f(x) {
	return 4 * x - 1;
}

console.log(`Anzahl Argumente: ${argc}`);
for (let i = 2; i < argc; i++) {
	const x = Number(process.argv[i]);
	console.log(`Für x=${x} ist f(${x}) = ${f(x)}`);
}
