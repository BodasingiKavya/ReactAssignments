import UserInfo from "./UserInfo";
function UserProfile(){
    const user = {
        name: "John Doe",
        age: 30,
    }
    return(
        <>
            <h1>User Info</h1>
            <UserInfo name={user.name} age={user.age}></UserInfo>
        </>
    )
}
export default UserProfile;