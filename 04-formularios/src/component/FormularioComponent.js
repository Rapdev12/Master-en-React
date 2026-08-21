import React, {useState}from 'react'

function FormularioComponent() {
  
    let [users, setUsers] = useState({});
 
    let dateform = e => {

        e.preventDefault();
        let target = e.target;
        let users = {
            name: target.name.value,
            lastname: target.lastname.value,
            gender: target.gender.value,
            biography:target.biography.value
        };
        console.log (users);

        setUsers(users);
    }
  
    return (
    <div>
        <h1>Form and Styles</h1>
            <div>
                {users.name} {users.lastname} it's a {users.gender} and it's 
                {users.biography}
            </div>
        <form onSubmit={dateform}>
            <input type="text" name='name' placeholder='Name' />
            <input type='text' name='lastname' placeholder='LastName' />
            <select name='gender'>
                <option value='man'>Man</option>
                <option value='woman'>Woman</option>
            </select>
            <textarea name='biography'>Biography</textarea>

            <input type='submit' value='Enviar' />
        </form>
     </div>
  )
}

export default FormularioComponent