import calculateHealth from "../src/js/health";

/*test('show health 50', () => {
    const result = calculateHealth(50);
    expect(result).toBe('wounded');
});

test('show health 90', () => {
    const result = calculateHealth(90);
    expect(result).toBe('healthy');
});

test('show health 10', () => {
    const result = calculateHealth(10);
    expect(result).toBe('critical');
});*/

/*const dataList = [
    ['Маг', 90, 'healthy'],
    ['Эльф', 50, 'wounded'],
    ['Орк', 10, 'critical'],
    ['Рыцарь', 0, 'dead'],
];

const handler = test.each(dataList);

handler('testing health function for %s with %i amount', (name, amount, expected)=>{
    const result = calculateHealth(amount);
    expect(result).toBe(expected);
})*/

test.each([
    ['Маг', 90, 'healthy'],
    ['Эльф', 50, 'wounded'],
    ['Орк', 10, 'critical'],
    ['Рыцарь', 0, 'dead'],
    //['Крестьянин', 0, 'healthy'],
    ['Король', 101, undefined],    
])
('testing health function for %s with %i amount', (name, amount, expected)=>{
    const result = calculateHealth(amount);
    expect(result).toBe(expected);
});