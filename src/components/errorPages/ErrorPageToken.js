import React from 'react';
import { Result, Button, Icon, Typography } from 'antd';

const { Paragraph, Text } = Typography;
const ErrorPageToken=()=>{ 

return(
<>
  <Result
   status="error"
    title="Something Goes Wrong with your Token"
    subTitle="you should go to the login and start your session again..."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <Icon style={{ color: 'red' }} type="close-circle" /> Your Token expired{' '}
      </Paragraph>
    </div>
  </Result>
</>
)

}

export default ErrorPageToken;