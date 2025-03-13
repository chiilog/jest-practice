import {describe, expect, test} from '@jest/globals';
import {reverseString} from "../reverseString";

describe('reverseString module', () => {
    test('reverseString("hello") は "olleh" を返す', () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test('reverseString("abcd") は "dcba" を返す', () => {
        expect(reverseString("abcd")).toBe("dcba");
    });

    test('空文字 ("") の場合 はそのまま "" を返す', () => {
        expect(reverseString("")).toBe("");
    });
});