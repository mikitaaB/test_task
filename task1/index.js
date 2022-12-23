const fs = require('fs');

function getAppropriatePair(aData) {
	const iDataLength = aData.length;
	const iCapacityHive = 2023;
	for (let i = 0; i < iDataLength; i++) {
		let iDiff = iCapacityHive - aData[i];
		if (iDiff in aData) {
			return aData[i] + "\n" + iDiff;
		}
	}
	throw "Didn't found a pair";
}

try {
	const sData = fs.readFileSync("./Input task1.txt", "utf8");
	const aInputData = sData.replace(/\r\n|\n/g, " ").split(" ");
	const iArrLength = aInputData.length;
	for (let i = 0; i < iArrLength; i++) {
		aInputData[i] = parseFloat(aInputData[i], 10);
	}
	if (aInputData.some(el => isNaN(el))) {
		throw new Error("The file contains non-numeric values");
	} else {
		console.log(getAppropriatePair(aInputData));
	}
} catch(err) {
	console.error(err);
}