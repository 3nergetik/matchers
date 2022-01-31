import sortArray from '../src/index.js';

const arr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const sortedArr = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test(('Сортировка с toEqual'), () => {
  expect(sortArray(arr)).toEqual(sortedArr);
});

test(('Сортировка с toBe'), () => {
  expect(sortArray(arr)).not.toBe(sortedArr);
});