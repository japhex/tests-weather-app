export function switchTemperature(temp, baseTemp) {
	let newTemp;

	switch(temp) {
		case 'c':
			newTemp = baseTemp;
			return {temp:newTemp,unit:'celsius'};
		case 'f':
			newTemp = (baseTemp * 9/5) + 32
			return {temp:newTemp,unit:'fahrenheit'};
		default:
			return;
	}
}