# 🔹 中級編：非同期関数のモック

関数 fetchUser(id: number): Promise<{ id: number; name: string }> を作成してください。

要件
	•	fetchUser(1) は { id: 1, name: "Alice" } を返す
	•	fetchUser(2) は { id: 2, name: "Bob" } を返す

✅ jest.fn().mockResolvedValueOnce() を使って fetchUser をモックし、次をテストしてください！
	•	fetchUser(1) が { id: 1, name: "Alice" } を返すか？
	•	fetchUser(2) が { id: 2, name: "Bob" } を返すか？
	•	異なる2つの ID を連続して呼び出した場合、正しい順番で異なる値が返ることを確認する