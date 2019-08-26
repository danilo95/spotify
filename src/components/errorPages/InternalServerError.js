import React from 'react';
import { Result } from 'antd';
const InternalServerError=()=>{

return(
 <div>
 <Result
    status="500"
    title="500-Internal Server Error"
    subTitle="Sorry, the server is wrong."
  />,
 </div>
)

}

export default InternalServerError;
