import { getAllUsers } from "../../../services/UserService";
import Link from 'next/link'

export default async function UserList(){

    const users = await getAllUsers();
    
    return(
        <>
            { users.map((user: User) => (
                <div key={user.id}>
                    <Link href={`/leaderboard/user/${user.id}`}>{user.username}</Link>
                </div>
            )) }
        </>
    )
}