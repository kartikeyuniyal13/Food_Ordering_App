//props are passed as object so can be deconstructed on the fly


const User=(props)=>{
   const name= props.name;
    return(
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location:Dehradun</h3>
            <h4>
                Contact:@KartikeyUniyal13
            </h4>
        </div>
    )
}
export default User;