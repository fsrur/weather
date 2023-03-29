import React from "react"

function Instructions() {
  
  return(
    <div>
    <p className="instructions">This is a React application, where a zip is used to fetch for a lat/long. The lat/long is then used to fetch the weather data and set the state for each piece of information displayed.</p>
    <p className="instructions">In total there are four different components: the header, the button, the main weather forecast and this comment section.</p>
    </div>
  )
}


export default Instructions