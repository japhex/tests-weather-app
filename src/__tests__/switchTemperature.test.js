import React from 'react';
import {switchTemperature} from './../modules/components/TemperatureSwitch/component-events';

it('returns an object with the correct properties', () => {
	const newTemp = switchTemperature('f', 7);
	// Check that object returned has the correct properties
	expect(newTemp).toEqual(
		expect.objectContaining({
			temp: expect.any(Number),
			unit: expect.any(String),
		})
	);
});

it('returns a nested integer value', () => {
	const newTemp = switchTemperature('f', 7);
	// Check that return value is a number
	expect(typeof newTemp.temp).toBe('number');
});

it('returns a correct value', () => {
	const newTemp = switchTemperature('f', 7);
	// 7 * 9/5) + 32 = 44.6
	expect(newTemp.temp).toBe(44.6);
});

it('returns a string value', () => {
	const newTemp = switchTemperature('f', 7);
	// Make sure unit is a string value
	expect(typeof newTemp.unit).toBe('string');
});
