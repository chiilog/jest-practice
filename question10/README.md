# 🔹 挑戦編：モジュールの完全モック

	•	api.ts に fetchPosts(): Promise<{ id: number; title: string }[]> という関数があるとします。
	•	fetchPosts() を jest.mock() を使ってモジュールごとモック してください。

✅ jest.mock() を使い、次をテストしてください！

	•	fetchPosts() が [{ id: 1, title: "Post 1" }] を返すか？
	•	fetchPosts() の呼び出し回数をチェックする
	•	fetchPosts() の呼び出しを resetMocks() でリセットし、リセット後の呼び出し回数をテストする