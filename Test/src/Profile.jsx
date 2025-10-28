import image from "./assets/Image.jpeg"
function Profile(){
    return(
        <>
        <h1 style={{color:"white",backgroundColor:"purple",textAlign:"center", padding:"2px"}}>Rabbit</h1>
        <img src={image} alt="image" width="500px" />
        </>
    )
}
export default Profile;