const payloadTheme = {
  plain: {
    color: '#596068',
    backgroundColor: '#EEF3F9',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value', 'number'],
      style: {
        color: '#0077b5',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'constant',
        'property',
        'regex',
        'inserted',
        'punctuation',
        'operator',
      ],
      style: {
        color: '#94a5ba',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: '#ffb3c2',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#00009f',
      },
    },
  ],
};

export default payloadTheme;
