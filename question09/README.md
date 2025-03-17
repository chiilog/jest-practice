# 🔹 上級編：エラーハンドリングのモック

関数 getData(url: string): Promise<string> を作成してください。

要件
	•	getData("https://example.com") は "Valid Data" を返す
	•	getData("https://error.com") は Promise.reject("Network Error") をスローする

✅ jest.fn().mockResolvedValueOnce() と mockRejectedValueOnce() を使って getData をモックし、次をテストしてください！

	•	getData("https://example.com") が "Valid Data" を返すか？
	•	getData("https://error.com") が Promise.reject("Network Error") をスローするか？