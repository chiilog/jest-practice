/**
 * URLからデータを取得する非同期関数
 * @param url - データを取得するURL
 * @returns Promise<string> - 取得したデータ
 * @throws Error - ネットワークエラーが発生した場合
 */
export async function getData(url: string): Promise<string> {
    if (url === "https://error.com") {
        throw new Error("Network Error");
    }
    return "Valid Data";
} 