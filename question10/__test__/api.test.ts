import {jest, expect, test} from '@jest/globals';
import { fetchPosts } from '../api';

jest.mock('../api', () => ({
    fetchPosts: jest.fn(),
}));

const fetchPostsData = fetchPosts as jest.MockedFunction<typeof fetchPosts>;

test('fetchPosts() が [{ id: 1, title: "Post 1" }] を返す', async () => {
    fetchPostsData.mockResolvedValueOnce([{ id: 1, title: "Post 1" }]);
    await expect(fetchPosts()).resolves.toEqual([{ id: 1, title: "Post 1" }]);
});

test('fetchPosts() の呼び出し回数をチェックする', () => {
    fetchPosts();
    expect(fetchPosts).toHaveBeenCalled();
});

test('fetchPosts() の呼び出しを resetMocks() でリセットし、リセット後の呼び出し回数をテストする', () => {
    jest.resetAllMocks();
    expect(fetchPosts).not.toHaveBeenCalled();
});