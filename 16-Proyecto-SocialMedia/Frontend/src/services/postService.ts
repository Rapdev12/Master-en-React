// services/postService.ts
import { Global } from "../helpers/Global";
import { Petitions } from "../helpers/Petitions";
import type { Publication, RawPublication } from "../types";

// ─────────────────────────────────────────────────────────────
// TRADUCTOR: RawPublication (backend) → Publication (UI)
// ─────────────────────────────────────────────────────────────
// - description (backend) → text (UI)
// - user.image            → user.image (igual)
// - file puede venir undefined → default []
// - description puede ser null → default ""
// ─────────────────────────────────────────────────────────────
function mapPublication(raw: RawPublication): Publication {
  return {
    _id: raw._id,
    text: raw.description ?? "",           // 🔄 null → "" (así PostCard nunca ve null)
    file: raw.file ?? [],                  // 🔄 default array vacío
    created_at: raw.created_at,
    user: {
      _id: raw.user._id,
      nick: raw.user.nick,
      image: raw.user.image ?? null,       // 🔄 null explícito si no hay
    },
  };
}

// ─────────────────────────────────────────────────────────────
// RUTA BASE (centralizada, si cambia se toca aquí)
// ─────────────────────────────────────────────────────────────
const RESOURCE = "publication";

// ─────────────────────────────────────────────────────────────
// GET /api/publication  → todos los posts
// ─────────────────────────────────────────────────────────────
export async function getPublications(): Promise<Publication[]> {
  const { ok, information, error } = await Petitions<RawPublication[]>(
    `${Global.url}${RESOURCE}`
  );
  if (!ok || !information) throw new Error(error ?? "Error al cargar publicaciones");
  return information.map(mapPublication);  // 🔄 traducimos cada uno
}

// ─────────────────────────────────────────────────────────────
// GET /api/publication/user/:id  → posts de un usuario
// ─────────────────────────────────────────────────────────────
export async function getPublicationsByUser(userId: string): Promise<Publication[]> {
  const { ok, information, error } = await Petitions<RawPublication[]>(
    `${Global.url}${RESOURCE}/user/${userId}`
  );
  if (!ok || !information) throw new Error(error ?? "Error al cargar tus publicaciones");
  return information.map(mapPublication);
}

// ─────────────────────────────────────────────────────────────
// POST /api/publication  → crear publicación
// La UI manda "text"; el backend espera "description". Traducimos.
// ─────────────────────────────────────────────────────────────
export async function createPublication(
  text: string,
  files: File[] = []
): Promise<Publication> {
  const formData = new FormData();
  formData.append("description", text);
  files.forEach((file) => {
    formData.append("file", file);
  });

  const { ok, information, error } = await Petitions<RawPublication>(
    `${Global.url}${RESOURCE}/create`,   // 🔄 añadido "/create"
    "POST",
    formData,
    true
  );

  if (!ok || !information) throw new Error(error ?? "Error al crear publicación");
  return mapPublication(information);
}

// ─────────────────────────────────────────────────────────────
// DELETE /api/publication/:id
// ─────────────────────────────────────────────────────────────
export async function deletePublication(id: string): Promise<void> {
  const { ok, error } = await Petitions(
    `${Global.url}${RESOURCE}/${id}`,
    "DELETE"
  );
  if (!ok) throw new Error(error ?? "Error al eliminar publicación");
}