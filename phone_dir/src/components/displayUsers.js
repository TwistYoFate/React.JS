import React from 'react'
import '../css/displayUsers.css'

 const DisplayUsers=({users, deleteUser})=>{
        let userlist=users && users.map(user=>{
            return(<table key={user.phone}>
                <tr>
                       <td id="un">{user.username}&nbsp;</td>
                       <td id='up'>{user.phone}</td>
                       <td><button style={{':hover':{background:'white'}}} onClick={()=>{deleteUser(user.phone)}}>Delete</button></td>
                </tr>
            </table>)
        })
        return(

            <div className="display">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th></th>
                    </tr>
                </table>
            {userlist}
            </div>
        )
            
}

export default DisplayUsers;