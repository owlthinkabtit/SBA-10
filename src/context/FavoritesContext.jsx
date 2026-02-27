import { createContext, useContext, useState } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export function FavoritesContext({ children }) {
  const [favorites, setFavorites] = useState([]);
  const addFavorite = (id) => {
    setFavorites([...favorites, id]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
}