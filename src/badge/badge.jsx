import React from "react";

import "./badge.css";


function Badge({color = "success", label}) { 
    return <span className={`badge ${color}`}>{label}</span>;
}

export default Badge;