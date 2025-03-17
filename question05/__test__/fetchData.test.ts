import {describe, expect, test} from '@jest/globals';
import { fetchData } from '../fetchData';

describe('fetchData module', () => {
    test('fetchData() は Promise<string> を返す', () => {
        return fetchData().then((data) => {
            expect(typeof data).toBe('string');
        });
    });

    test('fetchData() が "Hello, World!" を返す', () => {
        return fetchData().then((data) => {
            expect(data).toBe('Hello, World!');
        });
    });
});