/**
 * ユーザー情報を取得する非同期関数
 * @param id - ユーザーID
 * @returns Promise<{ id: number; name: string }> - ユーザー情報
 */
export const fetchUser = async (id: number): Promise<{ id: number; name: string }> => {
    // 実際のAPIコールを模擬
    if (id === 1) {
        return { id: 1, name: "Alice" };
    } else if (id === 2) {
        return { id: 2, name: "Bob" };
    }
    throw new Error(`User with id ${id} not found`);
}; 