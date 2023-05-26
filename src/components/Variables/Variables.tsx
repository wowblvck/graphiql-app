import { Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/store';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useTranslation } from 'react-i18next';
import { setIsVariablesOpen, setVariables } from '@/store/reducers/editor/editor.reducer';

const { Panel } = Collapse;

const Variables = () => {
  const { token } = theme.useToken();
  const { t } = useTranslation();

  const { variablesValue, isVariablesOpen } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const toggleVariables = () => {
    isVariablesOpen.includes('1')
      ? dispatch(setIsVariablesOpen([]))
      : dispatch(setIsVariablesOpen(['1']));
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={isVariablesOpen}
      expandIconPosition="end"
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : -90} />}
      onChange={toggleVariables}
      style={{
        background: token.colorBgContainer,
      }}
    >
      <Panel
        header={t('playground.variables')}
        key="1"
        style={{
          marginBottom: 24,
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          border: 'none',
        }}
      >
        <AceEditor
          name="variables area"
          mode="javascript"
          theme="github"
          onChange={(value) => {
            dispatch(setVariables(value));
          }}
          fontSize={14}
          showGutter={false}
          highlightActiveLine={true}
          value={variablesValue}
          wrapEnabled={true}
          setOptions={{
            tabSize: 2,
            useWorker: false,
          }}
          height="200px"
          width="100%"
        />
      </Panel>
    </Collapse>
  );
};

export default Variables;
