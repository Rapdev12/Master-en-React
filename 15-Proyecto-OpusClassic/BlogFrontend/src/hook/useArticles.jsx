// hook/useArticles.js
import { useEffect, useState } from 'react';
import { Global } from '../helpers/Global';
import { Petitions } from '../helpers/Petitions';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getArticles = async () => {
      try {
        const { information } = await Petitions(Global.url + "article", "GET");
        if (!ignore && information.status === "success") {
          setArticles(information.articles);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    getArticles();

    return () => {
      ignore = true; // si el componente se desmonta antes de que termine el fetch, ignoramos el resultado
    };
  }, []);

  return { articles, setArticles, loading };
};