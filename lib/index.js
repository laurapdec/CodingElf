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
    }
}
