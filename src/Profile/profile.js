function Profile(props){
    return(
        <>
         {props.img}
        <h1>Hello , {props.FullName}</h1>
        <p>Age , {props.Age}</p>
        <p>professionl , {props.professionl}</p>



        </>
    )
}


export default Profile; 