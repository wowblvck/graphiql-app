import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { CaretRightOutlined, DeleteOutlined, CopyOutlined } from '@ant-design/icons';
import { Col, Space, Button, Row, Grid } from 'antd';
import { useTranslation } from 'react-i18next';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useAddGraphQLQueryMutation } from '@/store/reducers/api/api.reducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setResponse } from '@/store/reducers/editor/editor.reducer';
import Variables from '../Variables/Variables';

const { useBreakpoint } = Grid;

const EditorIDE = () => {
  const { t } = useTranslation();
  const { xs } = useBreakpoint();
  const clipboard = useClipboard();

  const [editorValue, setEditorValue] = useState('');
  const { isVariablesOpen } = useAppSelector((state) => state.editor);

  const [addGraphQLQuery] = useAddGraphQLQueryMutation();
  const dispatch = useAppDispatch();

  const runEditor = async (value: string) => {
    const response = await addGraphQLQuery({ query: value });
    dispatch(setResponse(JSON.stringify(response)));
  };

  return (
    <div
      style={{
        height: '100%',
        borderRadius: '7px',
        boxShadow: '0 0 5px 4px #d3d3d3',
        overflow: 'hidden',
      }}
    >
      <Row style={{ height: isVariablesOpen.includes('1') ? '70%' : '91%' }}>
        <Col span={xs ? 21 : 22}>
          <AceEditor
            name="query area"
            placeholder={t('playground.queryPlaceholder')}
            mode="javascript"
            theme="github"
            onChange={(value) => setEditorValue(value)}
            fontSize={14}
            showGutter={true}
            highlightActiveLine={true}
            value={editorValue}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
              useWorker: false,
            }}
            height="100%"
            width="100%"
          />
        </Col>
        <Col span={xs ? 3 : 2} style={{ paddingTop: '7px' }}>
          <Space direction="vertical" style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              size={xs ? 'small' : 'middle'}
              title={t('playground.executeQuery')}
              type="primary"
              icon={<CaretRightOutlined />}
              onClick={() => runEditor(editorValue)}
            ></Button>
            <Button
              size={xs ? 'small' : 'middle'}
              title={t('playground.clearQueryArea')}
              icon={<DeleteOutlined />}
              onClick={() => setEditorValue('')}
            ></Button>
            <Button
              size={xs ? 'small' : 'middle'}
              title={t('playground.copyQuery')}
              icon={<CopyOutlined />}
              onClick={() => clipboard.copy(editorValue)}
            ></Button>
          </Space>
        </Col>
      </Row>
      <Row style={{ height: isVariablesOpen.includes('1') ? '30%' : '9%' }}>
        <Col span={24} style={{ borderTop: 'solid 1px #d3d3d3' }}>
          <Variables />
        </Col>
      </Row>
    </div>
  );
};

export default EditorIDE;