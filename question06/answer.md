🎯 テストの書き方はほぼ完璧！👏✨

ただし、1点だけ修正するとさらに良くなるポイント があります！

⸻

✅ 修正点

jest.mock() の記述方法を改善して、よりシンプル＆安全に！

🚨 修正前

```
jest.mock('../getUser', () => {
    return {
        getUser: jest.fn(),
    }
});
```

✅ 修正後

```
jest.mock('../getUser', () => ({
    getUser: jest.fn(),
}));
```

なぜこの修正が必要？
	•	{} の 明示的な return を省略 できる（シンプルに！）
	•	即時オブジェクトを返す場合は () を使うのがベストプラクティス
	•	Jest の公式ドキュメントの書き方と統一感が出る！

⸻

✅ 修正後の完全版

```
import { jest, expect, test } from '@jest/globals';
import { getUser } from '../getUser';

// `getUser` を Jest のモックに
jest.mock('../getUser', () => ({
    getUser: jest.fn(),
}));

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
```

⸻

📌 まとめ

✅ 修正前の jest.mock() よりシンプル＆わかりやすくなった！
✅ Jest の公式ドキュメントのスタイルと統一感がある！
✅ それ以外のテストの書き方は完璧！🎯

---

## mockRejectedValueOnce で型エラーが出てたので追加質問。

🎯 このエラーの原因は、TypeScriptが getUser の型を never と推論してしまっていることです！
これは jest.mock() を使ったときに、getUser の型情報が適切に認識されていないために起こります。

⸻

✅ 解決策 → jest.MockedFunction<typeof getUser> を使う！

🚨 エラー発生の原因

```
(getUser as jest.Mock).mockResolvedValueOnce({ id: 2, name: "Bob" });
```

	•	jest.Mock は 型情報を持たない一般的なモック関数の型 なので、TypeScriptが適切な型を推論できないことがある。
	•	結果として getUser の戻り値の型が never になってしまい、エラーになる。

✅ 修正方法

```
(getUser as jest.MockedFunction<typeof getUser>).mockResolvedValueOnce({ id: 2, name: "Bob" });
```

🔹 jest.MockedFunction<typeof getUser> を使うことで、getUser の型を維持しながらモック化できる！ 🎯
🔹 この方法なら、TypeScriptの型チェックをパスしつつ、mockResolvedValueOnce() を使える！

⸻

✅ 修正後の完全版

```
import { jest, expect, test } from '@jest/globals';
import { getUser } from '../getUser';

// `getUser` を Jest のモックに
jest.mock('../getUser', () => ({
    getUser: jest.fn(),
}));

test('getUser(1) は { id: 1, name: "Alice" } を返す', async () => {
    (getUser as jest.MockedFunction<typeof getUser>).mockResolvedValueOnce({ id: 1, name: "Alice" });

    await expect(getUser(1)).resolves.toEqual({ id: 1, name: "Alice" });
});

test('getUser(2) は { id: 2, name: "Bob" } を返す', async () => {
    (getUser as jest.MockedFunction<typeof getUser>).mockResolvedValueOnce({ id: 2, name: "Bob" });

    await expect(getUser(2)).resolves.toEqual({ id: 2, name: "Bob" });
});

test('getUser(99) は Promise.reject("User not found")', async () => {
    (getUser as jest.MockedFunction<typeof getUser>).mockRejectedValueOnce(new Error("User not found"));

    await expect(getUser(99)).rejects.toThrow("User not found");
});
```

⸻

📌 まとめ

修正前	修正後
(getUser as jest.Mock).mockResolvedValueOnce(...)	(getUser as jest.MockedFunction<typeof getUser>).mockResolvedValueOnce(...)

✅ jest.MockedFunction<typeof getUser> を使うと、型エラーがなくなる！
✅ TypeScriptの型情報を活かしたままモック関数が使える！ 🎯
✅ エラーが発生しなくなり、mockResolvedValueOnce() が正常に動作！
