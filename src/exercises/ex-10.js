const argc = process.argv.length;

console.log(`Anzahl Argumente: ${argc}`);
for (let i = 0; i < argc; i++) {
	console.log(`Argument ${i}: ${process.argv[i]}`);
}
