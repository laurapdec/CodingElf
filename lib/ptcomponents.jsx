import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import copy from 'copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';


const blockcomponent = {
  // Ex. 1: customizing common block types
  h1: ({children}) => <h1 className="text-3xl mt-6 mb-4 font-bold">{children}</h1>,
  h2: ({children}) => <h2 className="text-2xl mt-4 mb-2 font-bold">{children}</h2>,
  h3: ({children}) => <h3 className="text-xl mt-2 mb-1 font-bold">{children}</h3>,
  h4: ({children}) => <h4 className="text-lg mt-1 mb-1 font-bold">{children}</h4>,
  blockquote: ({children}) => <blockquote className="border-l-2 italic  pl-2 border-gray-400">{children}</blockquote>,
  
  // Ex. 2: rendering custom styles
  normal: ({children}) => (
    <p className="text-lg text-primary mt-2">
      <span className="ml-4">{children[0]}</span>
      {children.slice(1)}
    </p>
  ),
}



const ptComponents = {
  types: {
    customCode: (node) => {
      console.log(node.value.code.language);
      if (!node) return null;
      
      return (
        <div className=' relative flex flex-wrap mt-4 mb-10'>
          <SyntaxHighlighter language={node.value.code.language} style={coldarkDark} showLineNumbers='true' className='h-full w-full z-10 rounded-lg'>
            {node.value.code.code}
          </SyntaxHighlighter>
          <button className='absolute p-2 rounded-lg right-0 mr-4 mt-6 z-20 bg-gray-600 text-white ' onClick={() => copy(node.value.code.code)}>
            <MdContentCopy/>
          </button>
        </div>
    )}
  },

    
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => {return(<ul className=" list-disc list-inside">{children}</ul>)},
    number: ({children}) => {return(<ol className="list-decimal list-inside">{children}</ol>)},

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },

  block: blockcomponent,
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