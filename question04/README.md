# 挑戦編（エラーハンドリングを考慮する）

4. 割り算関数

関数 divide(a, b) を作成してください。

要件
	•	divide(10, 2) は 5 を返す。
	•	divide(9, 3) は 3 を返す。
	•	0で割ろうとした場合 はエラーをスローする（例: divide(10, 0) は throw new Error("Cannot divide by zero")）。
	•	非数値が渡された場合 もエラーをスローする（例: divide("10", 2)）。

✅ この関数をテストする Jest のテストを書いてください！