import React from "react";

function Details({ details }) {
    return (
        <div id="details">
            <p>Name: {details.name}</p>
            <p>Specialty: {details.specialty}</p>
            <p>Weight: {details.weight} lb</p>
            {details.greased ? <p>Greased</p> : <p>Not Greased</p>}
            <p>Highest Medal Acheived: {details["highest medal achieved"]}</p>
        </div>
    )
}

export default Details;