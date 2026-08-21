import React, {useState} from 'react';
import PropTypes from "prop-types";

const EjercicioComponet = ({year}) => {

    let [YearNow, setYearNow] = useState(year);

    let nextYear = e => {
        setYearNow(YearNow+1);
    }

    let lastYear = e => {
        setYearNow(YearNow-1);
    }
    
    let changeYear = e =>{
        let data = parseInt(e.target.value);

        if (Number.isInteger(data)){
            setYearNow(data);
        }else {
            setYearNow(year);
        }
       
    }

  return (
    <div>
        <h2>Exercise with Events and useState</h2>
        <strong class='label'>
            {YearNow}
        </strong>
        <p>
            <button onClick={nextYear}>next Year</button>
            &nbsp;
            <button onClick={lastYear}>last Year</button>
        </p>

        <p>
            <input onChange={ changeYear } type='text' placeholder='Change of Years' />
        </p>
    </div>
  )
}
EjercicioComponet.protoTypes ={
    year: PropTypes.number.isRequired
}

export default EjercicioComponet