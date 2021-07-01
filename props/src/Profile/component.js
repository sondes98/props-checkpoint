const Profile = (props) => {
    console.log (props);
    return (
        <div className="container">
        <span className="part2">{props.children}</span>
        <span className="part1" >
        <h2 style ={{width:"70%", margin :"auto", fontWeight:"400", color:"black",fontFamily:"century gothic"}}>
            Full Name : {props.FullName} 
        </h2>
        <br/>
        <h2 style ={{width:"70%", margin :"auto", fontWeight:"400", color:"black",fontFamily:"century gothic"}}>
                Profession : {props.Profession}
        </h2>
        <br/>
        <h2 style ={{width:"70%", margin :"auto", fontWeight:"400", color:"black",fontFamily:"century gothic"}}> 
            Bio :  {props.Bio} </h2>
        </span>
        </div>
        )
   };
   export default Profile;
