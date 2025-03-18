🎯 テストの構成は良いですが、jest.resetAllMocks() の使い方に誤りがあります！
特に 「リセット後の fetchPosts の呼び出し回数をチェックするテスト」 が正しく機能していません。

⸻

✅ 修正点

1️⃣ jest.resetAllMocks() の後は fetchPosts の呼び出しがリセットされる

🚨 問題点

```
test('fetchPosts() の呼び出しを resetMocks() でリセットし、リセット後の呼び出し回数をテストする', () => {
    jest.resetAllMocks();
    expect(fetchPosts).toHaveBeenCalled(); // ❌ 呼び出し回数はリセットされているのでエラーになる
});
```

	•	jest.resetAllMocks() を呼ぶと、すべてのモックの呼び出し履歴がクリアされる
	•	expect(fetchPosts).toHaveBeenCalled(); はエラーになる（なぜなら fetchPosts はリセットされ、1回も呼ばれていないから）

✅ 修正後

```
test('fetchPosts() の呼び出しを resetAllMocks() でリセットし、リセット後の呼び出し回数をテストする', () => {
    jest.resetAllMocks();
    expect(fetchPosts).not.toHaveBeenCalled(); // ✅ リセット後は 0 回のはず
});
```

⸻

✅ 修正後の完全版

```
import { jest, expect, test, beforeEach } from '@jest/globals';
import { fetchPosts } from '../api';

// `fetchPosts` をモック化
jest.mock('../api', () => ({
    fetchPosts: jest.fn(),
}));

const fetchPostsData = fetchPosts as jest.MockedFunction<typeof fetchPosts>;

// 各テスト前にモックの呼び出し履歴をリセット
beforeEach(() => {
    jest.resetAllMocks();
});

test('fetchPosts() が [{ id: 1, title: "Post 1" }] を返す', async () => {
    fetchPostsData.mockResolvedValueOnce([{ id: 1, title: "Post 1" }]);
    await expect(fetchPosts()).resolves.toEqual([{ id: 1, title: "Post 1" }]);
});

test('fetchPosts() の呼び出し回数をチェックする', () => {
    fetchPosts(); // 事前に1回呼び出す
    expect(fetchPosts).toHaveBeenCalledTimes(1); // ✅ 1回呼ばれたことを確認
});

test('fetchPosts() の呼び出しを resetAllMocks() でリセットし、リセット後の呼び出し回数をテストする', () => {
    jest.resetAllMocks();
    expect(fetchPosts).not.toHaveBeenCalled(); // ✅ リセット後なので 0 回
});
```

⸻

📌 修正まとめ

| 修正前 | 修正後 |
|--------|--------|
| `jest.resetAllMocks(); expect(fetchPosts).toHaveBeenCalled();` | `jest.resetAllMocks(); expect(fetchPosts).not.toHaveBeenCalled();` |
| `fetchPosts()` の呼び出し回数を `expect(fetchPosts).toHaveBeenCalled();` で確認 | `expect(fetchPosts).toHaveBeenCalledTimes(1);` を使用 |

✅ これで fetchPosts() のモック管理が正しく機能する！ 🎯
✅ リセット後の fetchPosts() の状態を適切にチェックできる！
