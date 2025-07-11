import { getLevel } from "../src/js/getlevel";
import fetchData from "../src/js/http";
jest.mock('../src/js/http');

// перед каждым тестом сбрасываем все моки с помощью jest.resetAllMocks
// все изначальные данные, которые в них могли бы быть
beforeEach(() => { 
    jest.resetAllMocks();
});
test('to get level about user 1', () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
});

//test('url check', () => {
//    expect(fetchData('https://server/user/1')).toBe('Mock this!')
    //expect(fetchData).toHaveBeenCalled()
//})

test('Should throw test error', () => {
    const testClass = TestClassService.getInstance();
    expect(() => testClass.fetchData()).toThrow();
});