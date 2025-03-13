import {describe, expect, test} from '@jest/globals';
import {max} from '../max';
describe('sum module', () => {
  test('max(3, 7) は 7 を返す', () => {
    expect(max(3, 7)).toBe(7);
  });

  test('max(10, 5) は 10 を返す', () => {
    expect(max(10, 5)).toBe(10);
  });

  test('max(-3, -7) は -3 を返す', () => {
    expect(max(-3, -7)).toBe(-3);
  });

  test('同じ値が渡された場合、その値を返す', () => {
    expect(max(4, 4)).toBe(4);
  });
});