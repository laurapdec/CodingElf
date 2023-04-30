export { default as Instagram } from "./instagram";
export { default as Github } from "./github";
export { default as Twitter } from "./twitter";
export { default as Tag } from "./tag";
export {default as Mail} from "./mail";
export {default as SearchBar} from "./searchbar";
export {default as FloatingBar} from "./floatingbar";
export {default as Likes} from "./likes";
export {default as ContactUsForm} from "./contactusform";
export {default as SummPost} from "./sumpost";
export {default as Comment} from "./comment";
export {default as PostSquare} from './postsquare';
export {default as ScrollUp} from './scrollup';

const blockcomponent = {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      normal: ({children}) => (
        <p className="text-lg text-primary">
          <span className="ml-4">{children[0]}</span>
          {children.slice(1)}
        </p>
      ),
  }

export const ptComponents = {
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
  
    blockquote: ({ children }) => { return  <blockquote className="border-l-purple-500">{children}</blockquote>},
    block: blockcomponent,
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }