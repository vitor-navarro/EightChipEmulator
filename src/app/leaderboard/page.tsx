//TODO exibir todos os usuários aqui e seus scores globais e o jogo com maior score, 
//junto a isso um link para o usuário.

import UserList from "./usersList";
import styles from "../../../styles/leaderboard.module.css"

export default async function Users(){

    // não exibir todos os usuários, fazer carregamento conforme necessidade
    return(
        <main>
            <div>
                <h1 className={styles.title}>Leaderboard</h1>
                <UserList></UserList>
            </div>
        </main>
    );

}