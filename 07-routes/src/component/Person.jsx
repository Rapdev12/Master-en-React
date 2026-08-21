import { useNavigate, useParams } from "react-router";

function Person() {
  const navegate = useNavigate();
  
  const params = useParams();
  const saves = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let secondName =e.target.secondName.value;
    let url = `/person/${name}/${secondName}`;

    navegate(url)
  }
  
  return (
    <div> <h1>Person: {params.name}{params.secondName}  </h1>
    
    
    <form onSubmit={saves}>
      <input type="tex" name= "name"/>
      <input type="tex" name= "secondName"/>
      <input type="submit" name= "save" value="save"/>

    </form>
    
    
    </div>
  )
}

export default Person