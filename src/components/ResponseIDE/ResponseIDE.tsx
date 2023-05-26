import { useTranslation } from 'react-i18next';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useAppSelector } from '@/store/store';

const ResponseIDE = () => {
  const { t } = useTranslation();
  const { responseValue } = useAppSelector((state) => state.editor);
  return (
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
        value={responseValue}
        mode="javascript"
        theme="github"
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
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default ResponseIDE;
