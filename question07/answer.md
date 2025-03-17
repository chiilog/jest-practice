greet が 1回だけ呼ばれたことを確認する

```
expect(jest.fn()).toHaveBeenCalledTimes(expected)

Expected number of calls: 1
Received number of calls: 3
```

というエラー。

---

📌 エラーの原因

Expected number of calls: 1
Received number of calls: 3

💡 エラーの原因 → greet がテストごとに累積して呼び出されている！

Jest のモック関数 (jest.fn()) は テストごとにリセットしない限り、すべての greet() の呼び出しが累積されてしまう ので、
	•	1つ目のテスト (greet("Alice")) で 1回 呼ばれる
	•	2つ目のテスト (greet("Bob")) でさらに 1回 呼ばれる
	•	3つ目のテスト (greet("Alice")) でまた 1回 呼ばれる
→ 合計で 3回呼ばれてしまい、toHaveBeenCalledTimes(1) の期待値とズレる！

⸻

✅ 解決策

1️⃣ beforeEach() で greet.mockClear() を呼ぶ

各テストが実行される前に mockClear() を呼んで、呼び出し回数をリセット する！

```
import { describe, jest, expect, test, beforeEach } from '@jest/globals';
import { greet } from '../greet';

// `greet` を Jest のモックに
jest.mock('../greet', () => ({
    greet: jest.fn(),
}));

describe('greet module', () => {
    beforeEach(() => {
        (greet as jest.Mock).mockClear(); // ✅ 各テストごとにモックをリセット
    });

    test('greet("Alice") は "Hello, Alice!" を返す', () => {
        (greet as jest.Mock).mockReturnValueOnce("Hello, Alice!");
        expect(greet("Alice")).toBe("Hello, Alice!");
    });

    test('greet("Bob") は "Hello, Bob!" を返す', () => {
        (greet as jest.Mock).mockReturnValueOnce("Hello, Bob!");
        expect(greet("Bob")).toBe("Hello, Bob!");
    });

    test('greet が 1回だけ呼ばれたことを確認する', () => {
        greet("Alice");
        expect(greet).toHaveBeenCalledTimes(1); // ✅ これでOK！
    });
});
```

✅ 各テスト実行前に mockClear() を呼ぶことで、テストごとの呼び出し履歴をリセット！
✅ toHaveBeenCalledTimes(1) の期待値と 実際の呼び出し回数 が一致するようになる！

⸻

2️⃣ afterEach() で mockReset() を使う方法

```
afterEach(() => {
    (greet as jest.Mock).mockReset();
});
```

🔹 mockClear() と mockReset() の違い

- mockClear() : 呼び出し回数 (toHaveBeenCalledTimes()) テストごとに呼び出し回数だけリセットしたい場合
- mockReset() : 呼び出し回数 + モックの実装 (mockReturnValueOnce() など) テストごとに完全にモックをリセットしたい場合

今回のケースでは、mockClear() で十分！

⸻

📌 まとめ

✅ エラーの原因は、greet の呼び出し回数が累積していたため！
✅ beforeEach(() => greet.mockClear()) を使うことで、テストごとにモックの呼び出し履歴をリセット！
✅ mockReset() もあるが、今回は mockClear() でOK！
