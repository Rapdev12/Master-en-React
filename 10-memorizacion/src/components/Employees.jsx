import React, { useState, useEffect } from "react";


function Employees() {

    const [employees, setEmployees] = useState([]);


    useEffect(() => {
    let ignore = false;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // setState dentro de un callback async → no rompe la regla
        if (!ignore) setEmployees(data);
      })
      .catch((error) => console.error("Error al traer empleados:", error));

    // Cleanup: evita setState si el componente se desmontó
    return () => {
      ignore = true;
    };
  }, []);

    return (
        <div>

            <ul className="employees">
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.username} · {employee.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default React.memo(Employees)