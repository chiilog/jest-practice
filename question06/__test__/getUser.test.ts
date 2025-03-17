import {jest, expect, test} from '@jest/globals';
import { getUser } from '../getUser';

jest.mock('../getUser', () => {
    return {
        getUser: jest.fn(),
    }
});

test('getUser(1) は { id: 1, name: "Alice" } を返す', async () => {
    (getUser as jest.Mock).mockResolvedValueOnce({ id: 1, name: "Alice" });

    await expect(getUser(1)).resolves.toEqual({ id: 1, name: "Alice" });
});

test('getUser(2) は { id: 2, name: "Bob" } を返す', async () => {
    (getUser as jest.Mock).mockResolvedValueOnce({ id: 2, name: "Bob" });

    await expect(getUser(2)).resolves.toEqual({ id: 2, name: "Bob" });
});

test('getUser(99) は Promise.reject("User not found")', async () => {
    (getUser as jest.Mock).mockRejectedValueOnce(new Error("User not found"));

    await expect(getUser(99)).rejects.toThrow("User not found");
});