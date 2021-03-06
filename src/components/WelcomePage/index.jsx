function WelcomePage( {user, setIsLoggedIn }){
    
    function HandleLogout(){
        return setIsLoggedIn(false)
    }
    
    return (
        <>
            <div className="card">
                <h1>Bem-vindo, {user}!</h1> 
                <button onClick={()=>HandleLogout()}>Sair</button>
            </div>
        </>
    )
}

export default WelcomePage