import { countChars } from './adapters';
import { removeExclamations } from "./exclamator";


jest.mock('./adapters', () => ({
    countChars: jest.fn(() => 50)
}))
    
describe('removeExclamations', () => {
    test('should return custom object on meet first limit condition', () => {
    const result = removeExclamations('esto es un test!!!!');
    expect(result).toEqual({
            total: 50,
            value: 'esto es un test!!!!',
            limit: 'It has passed first limit'
    });
    expect(countChars).toHaveBeenCalledTimes(1)
})
})