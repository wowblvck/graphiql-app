import { Space, Typography } from 'antd';
import { FC } from 'react';

const { Title, Paragraph } = Typography;

const FieldType: FC = () => {
  return (
    <Space direction="vertical">
      <Title level={3}>Image</Title>
      <Paragraph>
        {/* {fields.map((el) => (
          <div className="div" key={fieldTypeName.name}>
            {el[fieldTypeName.name]}
          </div>
        ))} */}
      </Paragraph>
    </Space>
  );
};

export default FieldType;
