import { useRef, useState } from "react";


function Forms() {
  
  const nameValue = useRef();
  const lastnameValue = useRef();
  const emailValue = useRef ();
  const [sendme, setSendme] = useState();

  const showme = e =>{
    e.preventDefault();

    console.log(nameValue.current.value);
    console.log(lastnameValue.current.value);
    console.log(emailValue.current.value);

    setSendme(`${nameValue.current?.value} ${lastnameValue.current?.value} has enviado el formulario`);
  }

  return (

    
    <div>

        <h1>Forms</h1>

        <form action="" onSubmit={showme}>
          <input type="text" placeholder="Name" ref={nameValue}/> <br/>
          <input type="text" placeholder="Last Name" ref={lastnameValue}/> <br/>
          <input type="email" placeholder="Email" ref={emailValue}/> <br/>

          <input type="submit" value="Send" />
        </form>


        {/*Otra manera de usar el Ref y mostrarlo en pantalla*/}
        {sendme &&(
          <div>
            <h2>{sendme}</h2>
          </div>
        )}
      
    </div>
  )
}

export default Forms