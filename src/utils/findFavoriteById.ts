export const findFavoriteById = (id: string) => {
    if (!localStorage.favorites) return null

    const favorites: string[] = JSON.parse(localStorage.favorites);

    return !!favorites.find(favorite => favorite === id)
}