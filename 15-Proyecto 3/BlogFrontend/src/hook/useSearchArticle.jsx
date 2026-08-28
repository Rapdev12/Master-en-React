// hook/useSearchArticle.js
import { useEffect, useState } from "react";
import { Global } from "../helpers/Global";
import { Petitions } from "../helpers/Petitions";

export const useSearchArticle = () => {
  const [articles, setArticles] = useState([]);
  const [texto, setTexto] = useState("");

  const fetchArticles = async (valor) => {
    if (!valor.trim()) return;
    try {
      const { information } = await Petitions(Global.url + "searcher/" + valor, "GET");
      if (information.status === "success") {
        setArticles(information.articles);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (!texto.trim()) return;
    const delay = setTimeout(() => {
      fetchArticles(texto);
    }, 400);
    return () => clearTimeout(delay);
  }, [texto]);

  const resultados = texto.trim() ? articles : [];

  return { articles: resultados, texto, setTexto, fetchArticles };
};