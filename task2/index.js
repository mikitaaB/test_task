/*
[1,1,3,7,9]
[1,4,12,12,76]

Объедини два отсортированных массива в один массив, также упорядоченный
по возрастанию. Но помню, что железо на компьютере дяди Сэма припоминает
еще большой взрыв - больших нагрузок может не пережить,
будь к нему снисходительным

Итог:
[1,1,1,3,4,7,9,12,12,76]
*/
const aFirst = [1, 1, 3, 7, 9];
const aSecond = [1, 4, 12, 12, 76];

try {
	if (!Array.isArray(aFirst) || !Array.isArray(aSecond)) {
		throw new Error ("Not arrays are given");
	}
	const aRes = aFirst.splice(0, 1);
	const iFirstLength = aFirst.length;
	const iSecondLength = aSecond.length;
	let i = 0, j = 0;
	while (i < iFirstLength && j < iSecondLength) {
		if (aSecond[j] === aFirst[i]) {
			aRes.push(aSecond[j]);
			aRes.push(aFirst[i]);
			i++;
			j++;
			continue;
		}
		if (aSecond[j] < aFirst[i]) {
			aRes.push(aSecond[j]);
			j++;
			continue;
		} else {
			aRes.push(aFirst[i]);
			i++;
			continue;
		}
	}
	if (i < iFirstLength) {
		aRes.push(...aFirst.slice(i));
	}
	if (j < iSecondLength) {
		aRes.push(...aSecond.slice(j));
	}
	console.log(aRes);
} catch(err) {
	console.error(err);
}