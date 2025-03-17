# 3️⃣ 上級編：APIリクエストのモック

関数 getUser(id: number) を作成してください。

要件
	•	getUser(1) は { id: 1, name: "Alice" } を返す
	•	getUser(2) は { id: 2, name: "Bob" } を返す
	•	getUser(99) は Promise.reject("User not found") を返す

✅ Jest の jest.fn() または jest.mock() を使って、APIのモックをテストしてください！