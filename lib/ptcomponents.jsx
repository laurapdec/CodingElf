import {Refractor} from 'react-refractor'

const blockcomponent = {
  // Ex. 1: customizing common block types
  h1: ({children}) => <h1 className="text-3xl font-bold">{children}</h1>,
  h2: ({children}) => <h2 className="text-2xl font-bold">{children}</h2>,
  h3: ({children}) => <h3 className="text-xl font-bold">{children}</h3>,
  h4: ({children}) => <h4 className="text-lg font-bold">{children}</h4>,
  blockquote: ({children}) => <blockquote className="border-l-2 italic  pl-2 border-gray-400">{children}</blockquote>,
  
  
  // Ex. 2: rendering custom styles
  normal: ({children}) => (
    <p className="text-lg text-primary">
      <span className="ml-4">{children[0]}</span>
      {children.slice(1)}
    </p>
  ),
}

const ptComponents = {
types: {
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
        }
},

list: {
  // Ex. 1: customizing common list types
  bullet: ({children}) => {return(<ul className=" list-disc list-inside">{children}</ul>)},
  number: ({children}) => {return(<ol className="list-decimal list-inside">{children}</ol>)},

  // Ex. 2: rendering custom lists
  checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
},

block: blockcomponent,
code:({props}) => {
  <Refractor 
    language={props.value.language}
    value={props.value.code}
    markers={props.value.highlightedLines}
  />
},
marks: {
  link: ({children, value}) => {
    const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
    return (
      <a href={value.href} rel={rel} className="text-[#5b858f] hover:text-gray-300 font-bold"> 
        {children}
      </a>
    )
  },
},
}

export default ptComponents