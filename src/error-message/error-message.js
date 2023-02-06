import { Alert, Space } from 'antd';

function ErrorMessage({ message }) {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Alert message="Error" description={message} type="error" style={{ marginTop: '20px' }} showIcon />
    </Space>
  );
}
export default ErrorMessage;
