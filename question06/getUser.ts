/**
 * ユーザー情報の型定義
 */
export interface User {
  id: number;
  name: string;
}

/**
 * ユーザーIDに基づいてユーザー情報を取得する関数
 * 
 * @param id - 取得するユーザーのID
 * @returns ユーザー情報を含むPromiseオブジェクト
 * @throws ユーザーが見つからない場合はエラーをスロー
 */
export const getUser = async (id: number): Promise<User> => {
  // 実際のアプリケーションではここでAPIリクエストなどを行う
  // このサンプル実装では、特定のIDに対して固定の応答を返す
  
  if (id === 1) {
    return { id: 1, name: "Alice" };
  } else if (id === 2) {
    return { id: 2, name: "Bob" };
  } else {
    throw new Error("User not found");
  }
}; 