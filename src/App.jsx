import Select from 'react-select'; 
import { useState, useMemo } from 'react'; 


export default function UnitConverter() {
  const [ length, setLength ] = useState(1); 
  const [ currentUnit, setCurrentUnit ] = useState('m');
  const [ currentLabel, setCurrentLabel ] = useState('Meter'); 
  const [ convertToUnit, setConvertToUnit ] = useState('km'); 
  const [ convertToLabel, setConvertToLabel ] = useState('Kilometer'); 

  const lengthUnits = [
    { value: 'Km', label: 'Kilometer'}, 
    { value: 'm', label: 'Meter' }, 
    { value: 'cm', label: 'Centimeter' }, 
    { value: 'mm', label: 'Milimeter' }, 
    { value: 'ft', label: 'Feet'}, 
    { value: 'in', label: 'Inches'}
  ]

  const lengthConverted = {
    'km': 0.001, 
    'm': 1, 
    'cm': 100, 
    'mm': 1000, 
    'ft': 0.3048, 
    'in': 0.0254
  } 

  const conversion = useMemo(() => {
    return length * lengthConverted[convertToUnit]/lengthConverted[currentUnit]; 
  }, [length, currentUnit, convertToUnit])

  return (
    <div className="container">
      <form onSubmit={(e) => {e.preventDefault()}}>
        <div className="input-container">
          <label>Input your length: </label><br></br>
          <input type="number" min='1' value={length} onChange={(e) => {
            setLength(e.target.value) 
          }} />
        </div>
        <div className="input-container">
          <label>Convert from: {currentLabel}</label> 
          <Select options={lengthUnits} onChange={(e) => {
            setCurrentUnit(e.value) 
            setCurrentLabel(e.label) 
          }} 
          defaultValue={lengthUnits[1]}/>
        </div>
        <div className="input-container">
          <label>Convert to: {convertToLabel}</label>
          <Select options={lengthUnits} onChange={(e) => {
            setConvertToUnit(e.value) 
            setConvertToLabel(e.label) 
          }} 
          defaultValue={lengthUnits[0]}/>
        </div>
      </form>
      <p>{conversion.toFixed(3)} {convertToUnit}</p>
    </div>
  )
}