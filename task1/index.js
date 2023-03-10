/*
Дядя Сэм решил оптимизировать свою пасеку и сократить количество ульев,
объединив некоторые из них. Был возведен улий-терем на 2023 жителя.
Дядя Сэм просит помочь ему найти подходящую(первую) пару ульев,
суммарная вместимость которых составит 2023 пчелы.

Например, имеем 6 ульев и их вместимость соответственно:
1723 - 1ое слагаемое
979
366
300 - 2ое слагаемое
675
1456

1723 + 300 = 2023

Вывод на экран:
300
1723
*/
const fs = require('fs');

function getAppropriatePair(aData) {
	const iCapacityHive = 2023;
	const oSet = new Set(aData);
	for (let iItem of oSet) {
		const iDiff = iCapacityHive - iItem;
		if (oSet.has(iDiff)) {
			return iItem + "\n" + iDiff;
		}
	}
	return -1;
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
		const vResult = getAppropriatePair(aInputData);
		console.log(vResult === -1 ? "Didn't found a pair" : vResult);
	}
} catch(err) {
	console.error(err);
}