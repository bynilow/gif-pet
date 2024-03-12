
export const toggleFavorite = (id: string) => {
    let favorites: string[] = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
    if(favorites.find(favorite => favorite === id)){
        favorites.filter(favorite => favorite !== id);
    }
    else{
        favorites.push(id);
    }

    localStorage.favorites = JSON.stringify(favorites);
    
    return favorites
}