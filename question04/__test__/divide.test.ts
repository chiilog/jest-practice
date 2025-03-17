import {describe, expect, test} from '@jest/globals';
import { divide } from '../divide';

describe('divide module', () => {
    test('divide(10, 2) は 5 を返す', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide(9, 3) は 3 を返す', () => {
        expect(divide(9, 3)).toBe(3);
    });

    test('0で割ろうとした場合 はエラーをスローする', () => {
        expect(() => divide(10, 0)).toThrow('0で割ることはできません');
    });

    test('非数値が渡された場合 もエラーをスローする', () => {
        expect(() => divide(10, '2')).toThrow(TypeError);
    });

    test('文字列が渡された場合 もエラーをスローする', () => {
        expect(() => divide('10', '2')).toThrow(TypeError);
    });

    test('負の数の割り算も可能', () => {
        expect(divide(-10, -2)).toBe(5);
    });
});