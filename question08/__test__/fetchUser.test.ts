import {jest, expect, test, beforeEach} from '@jest/globals';
import { fetchUser } from '../fetchUser';

jest.mock('../fetchUser', () => {
    return {
        fetchUser: jest.fn(),
    }
});

beforeEach(() => {
    jest.clearAllMocks();
});

test('fetchUser(1) は { id: 1, name: "Alice" } を返す', async () => {
    (fetchUser as jest.MockedFunction<typeof fetchUser>).mockResolvedValueOnce({ id: 1, name: "Alice" });
    await expect(fetchUser(1)).resolves.toEqual({ id: 1, name: "Alice" });
});

test('fetchUser(2) は { id: 2, name: "Bob" } を返す', async () => {
    (fetchUser as jest.MockedFunction<typeof fetchUser>).mockResolvedValueOnce({ id: 2, name: "Bob" });
    await expect(fetchUser(2)).resolves.toEqual({ id: 2, name: "Bob" });
});

test('異なる2つの ID を連続して呼び出した場合、正しい順番で異なる値が返る', async () => {
    (fetchUser as jest.MockedFunction<typeof fetchUser>).mockResolvedValueOnce({ id: 1, name: "Alice" });
    (fetchUser as jest.MockedFunction<typeof fetchUser>).mockResolvedValueOnce({ id: 2, name: "Bob" });
    await expect(fetchUser(1)).resolves.toEqual({ id: 1, name: "Alice" });
    await expect(fetchUser(2)).resolves.toEqual({ id: 2, name: "Bob" });
});