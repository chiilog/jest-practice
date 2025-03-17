/**
 * 2つの数値を受け取り、割り算を行う関数
 * @param {number} a - 割られる数
 * @param {number} b - 割る数
 * @returns {number} - 割り算の結果
 * @throws {TypeError} - 非数値が渡された場合
 * @throws {Error} - 0で割ろうとした場合
 */
export function divide(a: any, b: any): number {
  // 引数が数値かどうかチェック
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('引数は数値である必要があります');
  }
  
  // 0で割ろうとしていないかチェック
  if (b === 0) {
    throw new Error('0で割ることはできません');
  }
  
  // 割り算を実行して結果を返す
  return a / b;
}
