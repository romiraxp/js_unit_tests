import sortHealth from "../src/js/sorthealth";

const listHealth = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const listEqual = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('sort by health', () => {
    const result = sortHealth(listHealth);
    expect(result).toEqual(listEqual);
    }
);