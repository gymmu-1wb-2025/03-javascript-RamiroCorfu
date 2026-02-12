const number = Number(process.argv[2]);
const number2 = Number(process.argv[3]);
const remainder = number % number2;
if (remainder === 0) {
	console.log("Die Zahl ist teilbar");
} else {
	console.log("Die Zahl ist nicht teilbar");
}
