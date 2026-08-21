import { useForm } from "../hook/useForm";


const MyForm = () => {

    const {estado:MyForm, sendme, change} = useForm({})

    return (

        <div className="form-wrapper">

            <div className="form-container">
                <h2>Formulario</h2>
                <p className="subtitle">Save to course :{MyForm.titulo}</p>
               

                <form onSubmit={sendme} className="form-box">
                    <div className="input-group">
                        <label>Título:</label>
                        <input
                            type="text"
                            name="titulo"
                            onChange={change}
                        />
                    </div>

                    <div className="input-group">
                        <label>Año:</label>
                        <input
                            type="number"
                            name="anio"
                            onChange={change}

                        />
                    </div>

                    <div className="input-group">
                        <label>Descripción:</label>
                        <textarea
                            name="descripcion"
                            onChange={change}
                        />
                    </div>

                    <div className="input-group">
                        <label>Autor:</label>
                        <input
                            type="text"
                            name="autor"
                            onChange={change}
                        />
                    </div>

                    <div className="input-group">
                        <label>Mail:</label>
                        <input
                            type="email"
                            name="mail"
                            onChange={change}
                        />
                    </div>

                    <button type="submit">Guardar</button>
                </form>
            </div>
            {/* Tarjeta bonita para ver el estado en tiempo real */}
            <div className="debug-card">
                <h3>Estado en tiempo real (JSON):</h3>
                <pre>{JSON.stringify(MyForm, null, 2)}</pre>
            </div>
        </div>
    )
}

export default MyForm