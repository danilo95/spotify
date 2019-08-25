import React from 'react';
import { connect } from "react-redux";
import { Result, Button, Icon, Typography } from 'antd';
import { logOut } from "../../actions/UserInfo";
const { Paragraph, Text } = Typography;
const ErrorPageToken=(props)=>{ 

return(
<>
  <Result
   status="error"
    title="Something Goes Wrong with your Token"
    subTitle="you should go to the login and start your session again..."
    extra={[
      <Button type="primary" key="console" onClick={props.logOut}> 
        Go Login
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

const mapStateToProps = state => {
  return {
    logOut:state.userlogOut
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(ErrorPageToken);
