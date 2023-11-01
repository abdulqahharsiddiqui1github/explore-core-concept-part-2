import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const styleCss = {
        border: '3px solid purple',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px'
    }

    const playerAdd = ()=>{
        const addNewPlayer = team + 1;
        setTeam(addNewPlayer);
    }
    
    const playerRemove = ()=>{
        const removePlayer = team - 1;
        setTeam(removePlayer);
    }


    return(
        <div style={styleCss}>
            <h3>players: {team}</h3>
            <button onClick={playerAdd}>player add</button>
            <button onClick={playerRemove}>player remove</button>
        </div>
    )
}