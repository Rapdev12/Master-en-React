// hooks/petitions.ts
export interface PetitionResponse<T> {
  ok: boolean;
  information: T | null;
  error: string | null;
}

export const Petitions = async <T = Record<string, unknown>>(
  newurl: string,
  metodo: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  saveData: BodyInit | Record<string, unknown> | null = null,
  files: boolean = false,
): Promise<PetitionResponse<T>> => {
  try {
    // 🔑 El token SIEMPRE va, sin importar el método
    const headers: Record<string, string> = {
      Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
    };

    let body: BodyInit | undefined;

    if (metodo === "POST" || metodo === "PUT") {
      if (files) {
        body = saveData as BodyInit; // FormData: no tocar Content-Type
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(saveData);
      }
    }

    const petition = await fetch(newurl, { method: metodo, headers, body });
    const data = (await petition.json()) as T;

    if (petition.status === 401) {
      const hadToken = !!localStorage.getItem("token");

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      if (hadToken && !window.location.pathname.startsWith("/login")) {
        window.location.href = "/login";
        return { ok: false, information: null, error: "Sesión expirada" };
      }
    }
    if (!petition.ok) {
      const message =
        (data as { message?: string })?.message ?? `Error ${petition.status}`;
      return { ok: false, information: null, error: message };
    }

    return { ok: true, information: data, error: null };
  } catch (error) {
    console.error("Error:", error);
    return { ok: false, information: null, error: "Error de conexión" };
  }
};
