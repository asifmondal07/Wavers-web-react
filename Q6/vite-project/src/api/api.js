class AuthService{

    async  getUser(){
       try {
         const res= await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"GET",
            headers:{"Content-Type" : "application/json"}
        })
         if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        return data;

       } catch (error) {
        console.log(error)
        return null
       }
    }
}

const apiservice=new AuthService()

export default apiservice