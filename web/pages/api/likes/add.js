const sanityAPI = process.env.SANITY_API_LINK;
const sanityKey = process.env.GRAPHCMS_TOKEN;

export default function addLike(likes,slug) {
    const mutations = [{
      createOrReplace: {
        slug: {current: slug},
        _type: 'post',
        likes: likes
      }
    }]

  fetch(sanityAPI, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sanityKey}`
    },
    body: JSON.stringify({mutations})
  })
    .then(response => response.json())
    .then(result => (result))
    .catch(error => console.error(error))


}
