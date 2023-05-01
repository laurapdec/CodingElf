import { MdCode } from 'react-icons/md';

export default {
  name: 'customCode',
  title: 'Code',
  type: 'object',
  icon: MdCode,
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'code.code',
    },
  },
};