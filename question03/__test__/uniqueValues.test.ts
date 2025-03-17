import {describe, expect, test} from '@jest/globals';
import { uniqueValues } from '../uniqueValues';

describe('uniqueValues module', () => {
    test('uniqueValues([1, 2, 3, 4, 5]) は [1, 2, 3, 4, 5] を返す', () => {
        expect(uniqueValues([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('uniqueValues(["a", "b", "b", "c"]) は ["a", "b", "c"] を返す', () => {
        expect(uniqueValues(["a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    });

    test('空配列はそのまま返す', () => {
        expect(uniqueValues([])).toEqual([]);
    });

    test('異なるデータ型が混ざっている場合も処理する', () => {
        expect(uniqueValues([1, "1", 2, "2", 2])).toEqual([1, "1", 2, "2"]);
    });
});