import AceEditor from 'react-ace';
import { queryFetch } from '@/api/api';
import { useTranslation } from 'react-i18next';
import 'ace-builds/src-noconflict/theme-github';
import { useClipboard } from 'use-clipboard-copy';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import SideMenu from '@/components/SideMenu/SideMenu';
import React, { useState, Suspense, lazy } from 'react';
import { prettierResponse } from '@/utils/prettierResponse';
import { SideMenuItemsType } from '@/types/side-menu.types';
import { Layout, Row, Col, Grid, Spin, Space, Button, Collapse, theme } from 'antd';
import { BookOutlined, CaretRightOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const Docs = lazy(() => import('@components/Docs/Docs'));

const menuItems: SideMenuItemsType[] = [
  {
    name: 'docs',
    icon: <BookOutlined />,
    component: <Docs />,
    isOpen: false,
  },
];

const PlaygroundPage = () => {
  const { t } = useTranslation();
  const clipboard = useClipboard();
  const { xs, lg } = useBreakpoint();
  const { token } = theme.useToken();
  const [element, setElement] = useState('');
  const [response, setResponse] = useState('');
  const [variablesValue, setVariablesValue] = useState('');
  const [playgroundValue, setPlaygroundValue] = useState('');
  const [sideMenuItems, setSideMenuItems] = useState([...menuItems]);
  const [isVariablesOpen, setIsVariablesOpen] = useState<string[]>(['1']);
  const isOpen = sideMenuItems.find((item) => item.name === element)?.isOpen;

  const getElementByClick = (key: string) => {
    setElement(key);
    setSideMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.name === key ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };

  const playgroundOnChange = (value: string) => {
    setPlaygroundValue(value);
  };

  const variablesOnChange = (value: string) => {
    setVariablesValue(value);
  };

  const startQueryFetch = async (playgroundValue: string) => {
    const response = await queryFetch(playgroundValue);
    setResponse(JSON.stringify(response));
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
    isVariablesOpen.includes('1') ? setIsVariablesOpen([]) : setIsVariablesOpen(['1']);
  };

  return (
    <Layout>
      <SideMenu items={sideMenuItems} handleClick={getElementByClick} />
      <Content style={{ display: 'flex' }}>
        <Row style={{ width: '100%' }}>
          <Col
            span={isOpen ? 24 : 0}
            lg={isOpen ? 6 : 0}
            style={{
              height: lg ? '100%' : '250px',
              overflow: 'auto',
              paddingLeft: '5px',
            }}
          >
            <Suspense fallback={<Spin size="large" />}>
              {sideMenuItems.find((item) => item.name === element)?.component}
            </Suspense>
          </Col>
          <Col
            span={24}
            lg={isOpen ? 9 : 12}
            style={{
              padding: '10px',
              backgroundColor: 'white',
            }}
          >
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
                    onChange={(value) => playgroundOnChange(value)}
                    fontSize={14}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={playgroundValue}
                    setOptions={{
                      enableBasicAutocompletion: false,
                      enableLiveAutocompletion: false,
                      enableSnippets: false,
                      showLineNumbers: true,
                      tabSize: 2,
                      useWorker: false,
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Col>
                <Col span={xs ? 3 : 2} style={{ paddingTop: '7px' }}>
                  <Space direction="vertical" style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      size={xs ? 'small' : 'default'}
                      title={t('playground.executeQuery')}
                      type="primary"
                      icon={<CaretRightOutlined />}
                      onClick={() => startQueryFetch(playgroundValue, variablesValue)}
                    ></Button>
                    <Button
                      size={xs ? 'small' : 'default'}
                      title={t('playground.clearQueryArea')}
                      icon={<DeleteOutlined />}
                      onClick={() => setPlaygroundValue('')}
                    ></Button>
                    <Button
                      size={xs ? 'small' : 'default'}
                      title={t('playground.copyQuery')}
                      icon={<CopyOutlined />}
                      onClick={() => clipboard.copy(playgroundValue)}
                    ></Button>
                  </Space>
                </Col>
              </Row>
              <Row style={{ height: isVariablesOpen.includes('1') ? '30%' : '9%' }}>
                <Col span={24} style={{ borderTop: 'solid 1px #d3d3d3' }}>
                  <Collapse
                    bordered={false}
                    defaultActiveKey={isVariablesOpen}
                    expandIconPosition="end"
                    expandIcon={({ isActive }) => (
                      <CaretRightOutlined rotate={isActive ? 90 : -90} />
                    )}
                    onChange={onChange}
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
                        onChange={(value) => variablesOnChange(value)}
                        fontSize={14}
                        showGutter={false}
                        highlightActiveLine={true}
                        value={variablesValue}
                        setOptions={{
                          tabSize: 2,
                          useWorker: false,
                        }}
                        style={{
                          width: '100%',
                          height: '200px',
                        }}
                      />
                    </Panel>
                  </Collapse>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            span={24}
            lg={isOpen ? 9 : 12}
            style={{
              padding: '10px',
              backgroundColor: 'white',
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: '7px',
                boxShadow: '0 0 5px 4px #d3d3d3',
                overflow: 'hidden',
              }}
            >
              <AceEditor
                placeholder={t('playground.responsePlaceholder')}
                name="response area"
                value={prettierResponse(response)}
                mode="javascript"
                theme="github"
                onChange={(value) => variablesOnChange(value)}
                fontSize={14}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                  useWorker: false,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PlaygroundPage;
