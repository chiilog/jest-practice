/**
 * 投稿データを取得する関数
 * @returns {Promise<{ id: number; title: string }[]>} 投稿データの配列
 */
export const fetchPosts = async (): Promise<{ id: number; title: string }[]> => {
    // 実際のAPIエンドポイントへのリクエストをシミュレート
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" },
                { id: 3, title: "Post 3" }
            ]);
        }, 100);
    });
}; 