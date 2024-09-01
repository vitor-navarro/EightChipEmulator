import { getAllUsers } from "../../../services/UserService";
import Link from 'next/link';
import styles from '../../../styles/userList.module.css'; // Importando um arquivo CSS para estilização

export default async function UserList() {
    const users = await getAllUsers();

    return (
        <div className={styles.tableContainer}>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th className={styles.scoreHeader}>Geral Score</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user :User) => (
                        <tr key={user.id}>
                            <td>
                                <Link href={`/leaderboard/user/${user.id}`} className={styles.userLink}>
                                    {user.username}
                                </Link>
                            </td>
                            <td className={styles.scoreField}>Campo Extra</td> {/* Substitua por um valor real */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
