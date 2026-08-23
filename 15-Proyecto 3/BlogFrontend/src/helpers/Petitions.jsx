
export const Petitions = async (newurl, metodo, saveData = "") => {

    let information = [];

    try {

        let options = {
            method: "GET"
        };
        if (metodo == "GET" || metodo == "DELETE") {
            options = {
                method: metodo,

            }
        }

        if (metodo == "POST" || metodo == "PUT") {
            options = {
                method: metodo,
                body: JSON.stringify(saveData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        }

        const petition = await fetch(newurl, options);
        information = await petition.json();




    } catch (error) {
        console.error("Error:", error);

    }


    return {
        information,

    };
}