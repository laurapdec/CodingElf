export default {
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }
    ]
}