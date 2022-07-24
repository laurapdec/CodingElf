import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'wnc03qhv', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2022-07-23', // use a UTC date string
  token: 'skVGqgjNe6W7P2Kv33xLdJUSkAJ2W2nfCa0Kds7bxZRRjl04eXeMeGS0jcCzwRZnJoxTpZze2ca4juQHkAzNUawnLUKQvWfZ6l5KeQag9zTZL4P4WVneXJpJlRoxbf8heldc2nzdZ64mPISMfVdliuddfBqAhMU4qPUyuNuXw853ZM0c98Fa',
  useCdn: true // `false` if you want to ensure fresh data
})