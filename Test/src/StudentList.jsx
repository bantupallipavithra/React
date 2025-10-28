function StudentList(){
    const std=["Arya","Rahul","Aisha","kiran"]
    return(
        <>
       {
        std.map((item, index) => {
    return (
        <div key={index}>
            <li>{item}</li>
        </div>
    );
})
       }
        </>
    )
}
export default StudentList;