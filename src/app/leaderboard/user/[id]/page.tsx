"use client"; // para poder usar o useParams / elementos do client side

import { useParams } from "next/navigation";

export default function User(){

    const params = useParams();
    const id = params.id;

    //verificar se o usuário existe,

    //exibir nome de usuário
    //Exibir ranking global
    //score e ranking em cada jogo que ele joga
    //Apenas os jogos que ele joga devem ser exibidos

    return(

        <main>
            <div>
                <h1>User {id}</h1>
                
            </div>
        </main>
    );

}