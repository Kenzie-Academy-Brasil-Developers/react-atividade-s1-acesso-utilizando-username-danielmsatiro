import { useState } from "react"

function GetUserComponent( { setUser,setIsLoggedIn } ){
    
    const [ userInput, setUserInput ] = useState("")

    function HandleLogin(userInput){
        setUser(userInput)
        setIsLoggedIn(true)
    }
    
    return (
        <>
        <div>
            <input
                type="text"
                value={userInput}
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