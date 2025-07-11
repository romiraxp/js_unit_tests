import { getLevel } from "../src/js/getlevel";
import fetchData from "../src/js/http";
jest.mock('../src/js/http');

// перед каждым тестом сбрасываем все моки с помощью jest.resetAllMocks
// все изначальные данные, которые в них могли бы быть
beforeEach(() => { 
    jest.resetAllMocks();
});
test('to get level about user if status is not OK', () => {
    fetchData.mockReturnValue({ status: "", level: 10 });
    expect(getLevel(1)).toBe("Информация об уровне временно недоступна"); 
});

beforeEach(() => { 
    jest.resetAllMocks();
});
test('to get level about user if status is ok', () => {
    fetchData.mockReturnValue({ status: "ok", level: 10 });
    expect(getLevel(1)).toBe("Ваш текущий уровень: 10"); 
});

/*beforeEach(() => { 
    jest.resetAllMocks();
});
test('A test on throw error message', () => {
    //const url = "http://";
    //expect(fetchData()).toThrow('Mock this!');
    //expect(() => fetchData.mockReturnValue({ status: "ok", level: 10 })).toThrow(new Error('Mock this!'));
    expect(fetchData).toThrow('Mock this!');
});*/
