import { Link } from "react-router";


function Error() {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Pagina no Existe</p>
        <Link to ="/home">Go to Homepage!!!</Link>
    </div>
  )
}

export default Error