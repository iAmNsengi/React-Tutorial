export default UserDetails(){
    return (
        <div>
         <span>ID: {user.id} </span>
            <span>
              {" "}
              <b>Username</b> : {user.username}{" "}
            </span>
            <span>
              <b>Email</b>: {user.email}{" "}
            </span>
            <hr />
        </div>
    )
}