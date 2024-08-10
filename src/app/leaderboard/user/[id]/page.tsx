"use client"; // para poder usar o useParams / elementos do client side

import { useParams } from "next/navigation";
import { getUser } from "../../../../../services/UserService";

export default async function User(){

    const params = useParams();
    const id = Number(params.id);

    const user : User = await getUser(id);

    //TODO
    //verificar se o usuário existe,

    //exibir nome de usuário
    //Exibir ranking global
    //score e ranking em cada jogo que ele joga
    //Apenas os jogos que ele joga devem ser exibidos

    return(

        <main>
            <div>
                <h1>{user.username} {user.id}</h1>
                
            </div>
        </main>
    );

}