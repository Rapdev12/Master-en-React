import { useState, useEffect, useCallback } from "react";
import {
  getPublications,
  getPublicationsByUser,      // ✅ NUEVO
  createPublication,
  deletePublication,
} from "../services/postService";
import type { Publication } from "../types";

// ✅ NUEVO: helper para ordenar por fecha descendente (más nuevos primero).
//    El backend devuelve ascendente → reordenamos acá.
const sortByNewest = (list: Publication[]): Publication[] =>
  [...list].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

// 🔄 ahora acepta userId opcional:
//    usePosts()          → feed global (Home)
//    usePosts(user._id)  → solo los posts del usuario (MyPosts)
export function usePosts(userId?: string) {
  const [posts, setPosts] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ NUEVO: función común → elige endpoint según haya userId o no.
  //    useCallback evita que el useEffect de abajo se re-dispare en cada render.
  const fetchPosts = useCallback(
    () => (userId ? getPublicationsByUser(userId) : getPublications()),
    [userId]
  );

  useEffect(() => {
    let ignore = false;

    (async () => {
      try {
        const data = await fetchPosts();            // 🔄 antes: getPublications()
        if (ignore) return;
        setPosts(sortByNewest(data));               // 🔄 orden descendente
        setError(null);
      } catch (e) {
        if (ignore) return;
        setError((e as Error).message);
      } finally {
        if (!ignore) setLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [fetchPosts]);                                 // 🔄 dep = fetchPosts (cambia si cambia userId)

  const addPost = async (text: string, files: File[] = []) => {
    const newPost = await createPublication(text, files);
    setPosts((prev) => sortByNewest([newPost, ...prev]));   // 🔄 mantiene orden
  };

  const removePost = async (id: string) => {
    await deletePublication(id);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  const reload = async () => {
    setLoading(true);
    try {
      const data = await fetchPosts();              // 🔄 reusa misma lógica
      setPosts(sortByNewest(data));                 // 🔄 orden descendente
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, addPost, removePost, reload };
}