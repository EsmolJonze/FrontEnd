import React from 'react';
import ReactDOM from 'react-dom';
import TemplateVariableView from './variables/templateVariable/templateVariable.view';
import ImageElement from './images/imageElement.view';
import ReplacedVariable from './variables/replacedVariable/replacedVariable.view';
import RawHTMLBlocksView from './rawHTMLBlocks/rawHTMLBlocks.view';
import ReplyHistory from './replyHistory';

export const Portal = ({ children }) => ReactDOM.createPortal(children, document.body);

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div {...props} ref={ref} className={className} />
));

export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underlined) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
};

export const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'replaced-variable':
      return (
        <ReplacedVariable {...attributes} element={element}>
          {children}
        </ReplacedVariable>
      );
    case 'template-variable':
      return (
        <TemplateVariableView {...attributes} element={element}>
          {children}
        </TemplateVariableView>
      );
    case 'link':
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    case 'image':
      return (
        <ImageElement {...attributes} element={element}>
          {children}
        </ImageElement>
      );
    case 'image-link':
      return (
        <ImageElement {...attributes} element={element}>
          {children}
        </ImageElement>
      );
    case 'raw-html-block':
      return (
        <RawHTMLBlocksView {...attributes} element={element}>
          {children}
        </RawHTMLBlocksView>
      );
    case 'reply-history':
      return (
        <ReplyHistory {...attributes} element={element}>
          {children}
        </ReplyHistory>
      );
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'paragraph':
    default:
      return <p {...attributes}>{children}</p>;
  }
};
