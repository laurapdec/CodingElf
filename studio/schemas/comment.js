import { CommentIcon } from '@sanity/icons'

export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    icon: CommentIcon,
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'string',
      },
      {
        name: 'rate',
        title: 'Rate',
        type: 'number',
      },
      {
        name: 'post',
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }
    ],
  
    preview: {
      select: {
        name: 'name',
        message: 'comment',
        post: 'post.title',
      },
      prepare({name, message, post}) {
        return {
          title: `${name} on ${post}`,
          subtitle: message
        }
      }
    },
  }
  