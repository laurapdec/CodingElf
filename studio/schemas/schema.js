
// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import company from './company'
import comment from './comment'
import customCode from './objects/customCode'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  post,
  author,
  category,
  company,
  comment,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  customCode,
]