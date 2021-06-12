import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const generateKey =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const CodeBlock = ({ children, language, theme }) => (
  <Highlight {...defaultProps} theme={theme} code={children} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={className}
        style={{
          ...style,
          padding: '12px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
          fontSize: '12px',
          lineHeight: '16px',
          margin: '0 0 32px 0',
          overflow: 'auto',
        }}
      >
        {tokens.map((line, ids) => (
          <div key={generateKey} {...getLineProps({ line, key: ids })}>
            {line.map((token, key) => (
              <span key={generateKey} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
