/**
 * 配列から重複を取り除き、一意の値のみを含む配列を返す関数
 * 
 * @param arr - 処理する配列
 * @returns 重複を取り除いた配列
 */
export function uniqueValues<T>(arr: T[]): T[] {
  // Set オブジェクトを使用して重複を取り除く
  return [...new Set(arr)];
} 