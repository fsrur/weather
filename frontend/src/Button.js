import React, {useState} from "react"

function Button(props) {
  
  const [zip, setZip] = useState([])

  const handleSubmit = (event) => { 
    console.log(zip)
    props.zip(`${zip}`)
    event.preventDefault();
  }

  return(
    <div>
    <input placeholder="Zip Code" type="number" min="0" max="99999" value={zip} onChange={(e) => setZip(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


export default Button