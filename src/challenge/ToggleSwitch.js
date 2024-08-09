import React, { useState } from "react";

 const ToggleSwitch = () =>{
const [isOn, setIsOn] = useState(false)
    
    return (<div>
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? "OFF" : "ON"}
        </button>
    </div>)
}
export default ToggleSwitch;