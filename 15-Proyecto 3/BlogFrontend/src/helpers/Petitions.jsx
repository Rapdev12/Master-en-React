
export const Petitions = async (newurl, metodo, saveData = "", files =false) => {

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
            let body = JSON.stringify(saveData)
            
            if (files){
                options = {
                method: metodo,
                body: saveData
                } 
            }else{
                options = {
                method: metodo,
                body,
                headers: {
                    "Content-Type": "application/json"
                }
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