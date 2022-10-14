function getRandom(min, max) {
  if (min > max) {
    return Math.random() * (min - max) + max;
  }
  else {
    return Math.random() * (max - min) + min;
  }
}
getRandom(1, 100);

function stringLength(string , maxLenght) {
  if (stringLength <= maxLenght) {
    // eslint-disable-next-line no-console
    console.log(`Строка ${ string } занимает ${ string.length } символов`);
  }
  else {
    // eslint-disable-next-line no-console
    console.log('Строка превысила максимальное количество символов!');
  }
}
