import React from 'react';

const userInfo=({email,followers,country,product})=>{ 
 return(
  <div>
    <p><b>Email: </b>{email}</p>
   <p><b>followers: </b> {`${followers !== null ? `${followers.total}` : "0"}`} </p>
    <p><b>Country: </b>{country}</p>
    <p><b>MenberShip: </b>{product}</p>
  </div>
  )

}

export default userInfo;