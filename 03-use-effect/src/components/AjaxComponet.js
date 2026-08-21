import React, { useEffect, useState } from "react";

function AjaxComponet() {
  let [user, setUser] = useState([]);

  //Generic
  let getUserStatic = () => {
    setUser([
      {
        id: 1,
        email: "aron.lawson@reqres.in",
        first_name: "Aron",
        last_name: "Lawson",
      },
      {
        id: 2,
        email: "lindsay.fergusons@reqres.in",
        first_name: "Lind",
        last_name: "Fergusons",
      },
      {
        id: 3,
        email: "niklas.funke@reqres.in",
        first_name: "Niklas",
        last_name: "Funke",
      },
    ]);
  };

 /* let getUsersAjax =() =>{
    fetch ("https://reqres.in/api/users?page=1")
    .then(answers => answers.json())
    .then(final_answers =>{
        setUser(final_answers.data);
        console.log(final_answers)
    }, error => {
        console.log(error)
    })
  }*/

  /*useEffect(() => {
    //getUserStatic();
    getUsersAjax()
  }, []); */

  

  return (
    <div>
      <h2> User list via Ajax </h2>

      <ol className="users">
        {user.map((user) => {
          return (
            <li key={user.id}>
              {user.first_name} {user.last_name} {user.email} {/*datos Estaticos */}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default AjaxComponet;
