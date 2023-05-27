import Link, { LinkProps } from 'antd/es/typography/Link';
import React from 'react';
import regexifyString from 'regexify-string';

const TypeLink: React.FC<LinkProps> = (props) => {
  const { children } = props;
  return (
    <>
      {children &&
        regexifyString({
          pattern: /\b\w+\b/g,
          decorator: (match, index) => {
            return (
              <Link {...props} key={`${match}_${index}`}>
                {match}
              </Link>
            );
          },
          input: children.toString(),
        })}
    </>
  );
};

export default TypeLink;
