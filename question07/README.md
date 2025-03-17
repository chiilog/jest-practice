# 初級編：関数の呼び出しをモック

関数 greet(name: string): string を作成してください。

要件
	•	greet("Alice") は "Hello, Alice!" を返す
	•	greet("Bob") は "Hello, Bob!" を返す

✅ この関数を jest.fn() を使ってモックし、次をテストしてください！
	•	greet("Alice") が "Hello, Alice!" を返すか？
	•	greet("Bob") が "Hello, Bob!" を返すか？
	•	greet が 1回だけ呼ばれたことを確認 する