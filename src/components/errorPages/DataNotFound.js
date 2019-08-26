import React from 'react';
import { Result } from 'antd';
const DataNotFound=()=>{

return(
 <div>
 <Result
    status="404"
    title="404"
    subTitle="Sorry, the we dont find data to show you"
  />
 </div>
)

}

export default DataNotFound;