🎯 テストの書き方はとても良いです！👏✨
ただし、改善できるポイント がいくつかあるので説明します！

⸻

✅ 1. return fetchData().then(...) より await を使う方がシンプル

現在のコード：

```
test('fetchData() は Promise<string> を返す', () => {
    return fetchData().then((data) => {
        expect(typeof data).toBe('string');
    });
});
```

💡 このままでも動くけど、async/await を使うとシンプルで読みやすくなる！

```
test('fetchData() は Promise<string> を返す', async () => {
    const data = await fetchData();
    expect(typeof data).toBe('string');
});
```

✅ async を使うことで、テストのネストが減って読みやすくなる！

⸻

✅ 2. toBe('Hello, World!') のテストも async/await に統一

現在のコード：

```
test('fetchData() が "Hello, World!" を返す', () => {
    return fetchData().then((data) => {
        expect(data).toBe('Hello, World!');
    });
});
```

💡 これも await を使って統一感を出すとスッキリ！

```
test('fetchData() が "Hello, World!" を返す', async () => {
    const data = await fetchData();
    expect(data).toBe('Hello, World!');
});
```

✅ 統一感があるコードのほうがメンテしやすい！

⸻

✅ 3. resolves を使う方法もアリ

Jestには resolves を使う書き方もある！

```
test('fetchData() が "Hello, World!" を返す', () => {
    return expect(fetchData()).resolves.toBe('Hello, World!');
});
```

💡 await なしで書けるので、シンプルな非同期テストに使える！

⸻

📌 修正後のベストなテスト

```
import { describe, expect, test } from '@jest/globals';
import { fetchData } from '../fetchData';

describe('fetchData module', () => {
    test('fetchData() は Promise<string> を返す', async () => {
        const data = await fetchData();
        expect(typeof data).toBe('string');
    });

    test('fetchData() が "Hello, World!" を返す', async () => {
        const data = await fetchData();
        expect(data).toBe('Hello, World!');
    });

    test('fetchData() が "Hello, World!" を返す（resolves を使用）', () => {
        return expect(fetchData()).resolves.toBe('Hello, World!');
    });
});
```

✅ 3パターンの書き方を試せるので、どれが好きか選べる！ 🎯

⸻

🎯 まとめ

✅ async/await を使うとスッキリ書ける
✅ resolves を使うと return だけで簡潔に書ける
✅ 統一感を持って書くと、メンテしやすくなる！
