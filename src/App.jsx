import Select from 'react-select'; 
import { useState, useMemo } from 'react'; 

export default function LengthConverter() {
  const [lengthUnit, setLengthUnit ] = useState('m'); 
  const [convertUnit, setConvertUnit ] = useState('km'); 
  const [value, setValue ] = useState(1)

  const options = [
    {value: 'km', label: 'Kilometer'}, 
    {value: 'm', label: 'Meter'}, 
    {value: 'dm', label: 'Decimeter'}, 
    {value: 'cm', label: 'Centimeter'},
    {value: 'mm', label: 'Millimeter'}, 
    {value: 'hm', label: 'Hectometer'}, 
    {value: 'dam', label: 'Decameter'}, 
    {value: 'in', label: 'Inch'}, 
    {value: 'ft', label: 'Foot'}, 
    {value: 'yd', label: 'Yard'}, 
    {value: 'mi', label: 'Mile'}, 
    {value: 'nmi', label: 'Nautical Mile'}, 

  ] 
  
  const unitValues = {
    'km': 0.001, 
    'm': 1, 
    'dm': 10, 
    'cm': 100,
    'mm': 1000, 
    'hm': 0.01, 
    'dam': 0.1, 
    'in': 39.37008, 
    'ft': 3.2808, 
    'yd': 1.093613, 
    'mi': 0.0006213712, 
    'nmi': 0.0005399568
  } 
  const convertedValue = useMemo(() => {
    return value * unitValues[convertUnit]/unitValues[lengthUnit]
  }, [value, lengthUnit, convertUnit])
  
  return (
    <div className="container">
      <h1 className="heading">Length Converter</h1> 

      <input type="number" className="input-number" defaultValue={1} onChange={(e) => setValue(e.target.value)}/> 

      <div className="input-units">
        <div className="convert-from">
          <label htmlFor="convert-from" className="convert-from-label">Convert from</label>
          <Select options={options} defaultValue={options[1]} onChange={(e) => {setLengthUnit(e.value)}} /> 
        </div>
        <div className="convert-to">
          <label htmlFor="convert-to" className="convert-to-label">Convert to</label>
          <Select options={options} defaultValue={options[0]} onChange={(e) => {setConvertUnit(e.value)}}/>
        </div>
      </div>
      <p className="result-display">{convertedValue ? `${convertedValue.toFixed(4)} ${convertUnit}`: ''}</p>
    </div>
  )
}