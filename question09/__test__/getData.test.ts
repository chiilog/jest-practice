import {jest, expect, test, beforeEach} from '@jest/globals';
import { getData } from '../getData';

jest.mock('../getData', () => ({
    getData: jest.fn(),
}));

const mockGetData = getData as jest.MockedFunction<typeof getData>;

beforeEach(() => {
    jest.resetAllMocks();
});

test('getData("https://example.com") が "Valid Data" を返す', async () => {
    mockGetData.mockResolvedValueOnce("Valid Data");
    await expect(getData("https://example.com")).resolves.toEqual("Valid Data");
});

test('getData("https://error.com") が Promise.reject("Network Error") をスローする', async () => {
    mockGetData.mockRejectedValueOnce(new Error("Network Error"));
    await expect(getData("https://error.com")).rejects.toThrow("Network Error");
});