import { useState } from "react";
import { Global } from "../helpers/Global";
import { Petitions } from "../helpers/Petitions";

export const useEditArticle = () => {
  const [editId, setEditId] = useState(null);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const startEditing = (article) => {
    setEditId(article._id);
    setTitleInput(article.title || "");
    setContentInput(article.content || "");
  };

  const cancelEditing = () => {
    setEditId(null);
    setTitleInput("");
    setContentInput("");
  };

  // Función para enviar los cambios mediante PUT
  const updateArticle = async (e, id, articles, setArticles) => {
    e.preventDefault();
    try {
      let { information } = await Petitions(Global.url + "article/" + id, "PUT", {
        title: titleInput,
        content: contentInput
      });

      if (information.status == "success") {
        // Actualizamos el array en el componente principal
        let updatedArticles = articles.map(art => art._id === id ? information.article : art);
        setArticles(updatedArticles);
        
        // Cerramos la edición limpiando los estados
        cancelEditing();
      }
    } catch (error) {
      console.error("Error al actualizar el artículo:", error);
    }
  };

  return {
    editId,
    titleInput,
    setTitleInput,
    contentInput,
    setContentInput,
    startEditing,
    cancelEditing,
    updateArticle
  };
};