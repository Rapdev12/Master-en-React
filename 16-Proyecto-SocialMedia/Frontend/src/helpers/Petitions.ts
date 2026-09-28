export const Petitions = async <T = Record<string, unknown>>(
  newurl: string,
  metodo: string,
  saveData: BodyInit | Record<string, unknown> | null = null, //Simplemente le indica a TypeScript que los datos
                                                             //del formulario pueden venir como un objeto JSON estándar 
                                                            // o como un objeto FormData para archivos, evitando errores de tipado sin necesidad de usar any.
  files: boolean = false
) => {
  let information: T | null = null;

  try {
    let options: RequestInit = {
      method: "GET"
    };

    if (metodo === "GET" || metodo === "DELETE") {
      options = {
        method: metodo
      };
    }

    if (metodo === "POST" || metodo === "PUT") {
      const body = files ? (saveData as BodyInit) : JSON.stringify(saveData);

      if (files) {
        options = {
          method: metodo,
          body
        };
      } else {
        options = {
          method: metodo,
          body,
          headers: {
            "Content-Type": "application/json"
          }
        };
      }
    }

    const petition = await fetch(newurl, options);
    information = (await petition.json()) as T;

  } catch (error) {
    console.error("Error:", error);
  }

  return {
    information
  };
};