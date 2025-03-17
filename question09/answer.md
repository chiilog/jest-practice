# **📝 修正後のアドバイス**

## **✅ テストの書き方はほぼ完璧！🎯**
Jest のモック関数を適切に使えており、`mockResolvedValueOnce()` と `mockRejectedValueOnce()` もうまく活用できています！  
ただ、**1点だけ修正するとさらに良くなるポイント** があります。

---

## **✅ 修正点**
### **1️⃣ `jest.clearAllMocks()` → `jest.resetAllMocks()` に変更**
現在のコードでは、各テストの前に `jest.clearAllMocks()` を使っています。

**🚨 問題点**

```ts
beforeEach(() => {
    jest.clearAllMocks();
});
```

	•	clearAllMocks() は モックの呼び出し履歴のみをリセット する
	•	しかし、mockResolvedValueOnce() や mockRejectedValueOnce() の設定はリセットされない

→ 意図しないモックの状態がテスト間で引き継がれる可能性がある

✅ 解決策 → jest.resetAllMocks() を使う

```
beforeEach(() => {
    jest.resetAllMocks();
});
```

	•	resetAllMocks() は モックの呼び出し履歴＋モックの設定 もリセットする
	•	テストごとに完全な新しいモックが使えるので、より安全！

⸻

🔹 修正後の完全版

```
import { jest, expect, test, beforeEach } from '@jest/globals';
import { getData } from '../getData';

// `getData` を Jest のモックに
jest.mock('../getData', () => ({
    getData: jest.fn(),
}));

// `getData` をモック関数として型付け
const mockGetData = getData as jest.MockedFunction<typeof getData>;

// 各テスト前に **モックの履歴＆設定を完全にリセット**
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
```

⸻

📌 修正まとめ

修正前	修正後
jest.clearAllMocks();	jest.resetAllMocks();

✅ resetAllMocks() を使うことで、テスト間の影響を完全になくせる！ 🎯
✅ これで、どのテストでも mockResolvedValueOnce() / mockRejectedValueOnce() が期待通り動く！
