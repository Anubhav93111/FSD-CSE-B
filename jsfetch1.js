const url = "https://dummyjson.com/users";
const f1 = async () => {
    try {
        const pr = await fetch(url);
        const data = await pr.json();
        data.users.forEach((user) => {
            console.log("Name =",user.firstName);
        }); 
    } catch (error) {
        console.log(error);
    }
}
f1();
