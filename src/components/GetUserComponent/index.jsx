import { useState } from "react"

function GetUserComponent( { setUser,setIsLoggedIn } ){
    
    const [ userInput, setUserInput ] = useState("")

    function HandleLogin(userInput){
        if(userInput!==""){
            setUser(userInput)
            setIsLoggedIn(true)
        }
    }
    
    return (
        <>
        <div className="card">
            <input
                type="text"
                value={userInput}
                placeholder="Digite o seu nome"
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button
                onClick={() => HandleLogin(userInput)}
                >Acessar com o nome</button>
        </div>
        </>
    )
}

export default GetUserComponent