import { baseURL } from "./BaseService";

export async function getAllUsers() {
    const response = await fetch(baseURL + "/users", { next: 
        {revalidate: 60 } //1 minuto
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return response.json(); 
}

export async function getUser(id : number) {
    const response = await fetch(baseURL + "/users/" + id)

    if(!response.ok){
        throw new Error("Network response was not ok")
    }

    return response.json();
}