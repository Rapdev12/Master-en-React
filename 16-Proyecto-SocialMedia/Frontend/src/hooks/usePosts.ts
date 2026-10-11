// hooks/usePosts.ts
import { useState, useEffect } from "react";
import {
  getPublications,
  createPublication,
  deletePublication,
} from "../services/postService";
import type { Publication } from "../types";

export function usePosts() {
  const [posts, setPosts] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ─────────────────────────────────────────────────────────
  // Carga inicial — fetch DENTRO del effect (no en una función externa)
  // Así el linter ve que setState va después del await → sin warning
  // ─────────────────────────────────────────────────────────
  useEffect(() => {
    let ignore = false;    // 👈 por si el componente se desmonta antes de recibir

    (async () => {
      try {
        const data = await getPublications();
        if (ignore) return;                // 👈 no setState si ya se desmontó
        setPosts(data);
        setError(null);
      } catch (e) {
        if (ignore) return;
        setError((e as Error).message);
      } finally {
        if (!ignore) setLoading(false);
      }
    })();

    return () => {
      ignore = true;       // 👈 cleanup: si el componente se va, ignoramos la respuesta
    };
  }, []);                  // 👈 dependencias vacías: solo corre al montar

  // ─────────────────────────────────────────────────────────
  // addPost — crear publicación
  // ─────────────────────────────────────────────────────────
  const addPost = async (text: string, files: File[] = []) => {
  const newPost = await createPublication(text, files);  // 🔄 pasa los files
  setPosts((prev) => [newPost, ...prev]);
};

  // ─────────────────────────────────────────────────────────
  // removePost — borrar publicación
  // ─────────────────────────────────────────────────────────
  const removePost = async (id: string) => {
    await deletePublication(id);
    setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  // ✅ Recarga manual (para botones "refrescar")
  // No da warning porque NO se llama desde un useEffect,
  // solo desde eventos onClick u otros handlers.
  const reload = async () => {
    setLoading(true);
    try {
      const data = await getPublications();
      setPosts(data);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { posts, loading, error, addPost, removePost, reload };
}