
  
const BlockComponent = {
  // Ex. 1: customizing common block types
  h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
  blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

  // Ex. 2: rendering custom styles
  customHeading: ({children}) => ( <h2 className="text-lg text-primary text-purple-700">{children}</h2> ),
  
  // Ex. 2: rendering custom styles
  normal: ({ children }) => {

    // render the modified text
    return  <p className="text-gray-50">{'\t' + children}</p>;
  },
}

const ptComponents = {
  types: {
    normal: ({ children }) => { return  <p className="text-gray-50">{'\t' + children}</p>},
    blockquote: ({ children }) => { return  <blockquote className="border-l-purple-500">{children}</blockquote>},
    image: ({ value }) => {
    if (!value?.asset?._ref) {
        return null
    }
    return (
        <img
        alt={value.alt || ' '}
        loading="lazy"
        src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
    )
    },
  }
}
