import { Space, Typography } from 'antd';
import { FC } from 'react';

const { Title, Paragraph } = Typography;

type FieldTypeProps = {
  fieldTypeName: string;
};

const FieldType: FC<FieldTypeProps> = (props) => {
  const { fieldTypeName } = props;

  return (
    <Space direction="vertical">
      <Title level={3}>{fieldTypeName}</Title>
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
