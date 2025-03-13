/**
 * 文字列を逆順にする関数
 * @param {string} str - 逆順にする文字列
 * @return {string} 逆順にした文字列
 */
export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
}