import React from 'react';

const userInfo=({email,followers,country})=>{ 
 return(
  <div>
    <p><b>Email: </b>{email}</p>
   <p><b>followers: </b> {`${followers !== null ? `${followers.total}` : null}`} </p>
    <p><b>Country: </b>{country}</p>
  </div>
  )

}

export default userInfo;