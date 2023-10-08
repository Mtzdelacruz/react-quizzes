import React from "react"; 

export default function button ({text, onPress}) {
    return <button onClick={onPress}>{text}</button>
}