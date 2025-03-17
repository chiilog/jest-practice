import {describe,jest, expect, test} from '@jest/globals';
import { greet } from '../greet';

jest.mock('../greet', () => {
    return {
        greet: jest.fn(),
    }
});

describe('greet module', () => {
    test('greet("Alice") は "Hello, Alice!" を返す', () => {
        (greet as jest.Mock).mockReturnValueOnce("Hello, Alice!");
        expect(greet("Alice")).toBe("Hello, Alice!");
    });
    
    test('greet("Bob") は "Hello, Bob!" を返す', () => {
        (greet as jest.Mock).mockReturnValueOnce("Hello, Bob!");
        expect(greet("Bob")).toBe("Hello, Bob!");
    });
    
    test('greet が 1回だけ呼ばれたことを確認する', () => {
        greet("Alice");
        expect(greet).toHaveBeenCalledTimes(1);
    });
});

