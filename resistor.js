/* resistor.js */

/*
  electronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and
  determine the resistance value in Ohms

  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const multiplierCodes = {
  black: 1,
  brown: 10,
  red: 100,
  orange: 1000,
  yellow: 10000,
  green: 100000,
  blue: 1000000,
  violet: 10000000,
  grey: 100000000,
  white: 1000000000,
  gold: 0.1,
  silver: 0.01,
};

function getColorValue(color) {
  return colorCodes[color];
}

function getMultiplierValue(color) {
  return multiplierCodes[color];
}

function getThreeBandValue(bands) {
  const value = +`${getColorValue(bands.color1)}${getColorValue(bands.color2)}` * getMultiplierValue(bands.multiplier);
  let formattedValue = value;
  if (bands.multiplier === 'gold') {
    formattedValue = +value.toFixed(1);
  }
  return formattedValue;
}

function formatNumber(val) {
  let value = val;
  let metric = '';
  if (value >= 1000000000) {
    value /= 1000000000;
    metric = 'G';
  }
  if (value >= 1000000) {
    value /= 1000000;
    metric = 'M';
  }
  if (value >= 1000) {
    value /= 1000;
    metric = 'k';
  }
  return value + metric;
}

function getTolerance(color) {
  const toleranceCodes = {
    brown: '±1%',
    red: '±2%',
    green: '±0.5%',
    blue: '±0.25%',
    violet: '±0.1%',
    grey: '±0.05%',
    gold: '±5%',
    silver: '±10%',
  };
  return toleranceCodes[color];
}

function getResistorOhms(bands) {
  const value = getThreeBandValue(bands);
  const formattedValue = formatNumber(value);
  const tolerance = getTolerance(bands.tolerance);
  return `Resistor value: ${formattedValue} Ohms ${tolerance}`;
}

export { getResistorOhms };
