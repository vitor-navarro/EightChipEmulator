//TODO exibir todos os usuários aqui e seus scores globais e o jogo com maior score, 
//junto a isso um link para o usuário.

interface user{
    id: number;
    username: string;

}

async function getData(){
    const response = await fetch("http://localhost:8080/users");

    if(!response.ok){
        throw new Error("Failed to fetch data");
    }

    return response.json();
}

export default async function Users(){

    const data = await getData();
    console.log(data);
    // não exibir todos os usuários
    // fazer carregamento conforme necessidade
    return(
        <main>
            <div>
                <h1>Leaderboard</h1>
                <ul>
                    {
                        data.map(user => (
                            <li>{user.username}</li>

                        ))
                    }
                </ul>

            </div>
        </main>
    );

}