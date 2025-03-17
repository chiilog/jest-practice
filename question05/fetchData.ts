/**
 * 文字列データを非同期で取得する関数
 * @returns {Promise<string>} "Hello, World!" という文字列で解決される Promise
 */
export const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    // 非同期処理をシミュレート
    setTimeout(() => {
      resolve('Hello, World!');
    }, 100);
  });
};
