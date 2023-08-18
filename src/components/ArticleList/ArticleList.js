import { Article } from "../Article/Article";
import { Sidebar } from "../Sidebar/Sidebar";

const ARTICLES = [
    {
        postTitle: "[1] Titulo da postagem",
        description: "[1.1]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis augue ac orci bibendum, quis laoreet metus feugiat. Suspendisse potenti. Sed eu leo quis massa cursus hendrerit in vel risus. Mauris nec odio nec massa eleifend sagittis. Fusce rhoncus, lacus nec congue hendrerit, est dui dignissim odio, sed pretium enim ligula non metus. Fusce rhoncus, nulla nec sodales egestas, quam odio mollis risus, in pellentesque ante ante ut dolor. Nunc a tellus libero. Vivamus aliquam dictum turpis at luctus. Morbi vestibulum vel nunc a mollis"
    },

    {
        postTitle: "[2] Titulo da postagem",
        description: "[2.1]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis augue ac orci bibendum, quis laoreet metus feugiat. Suspendisse potenti. Sed eu leo quis massa cursus hendrerit in vel risus. Mauris nec odio nec massa eleifend sagittis. Fusce rhoncus, lacus nec congue hendrerit, est dui dignissim odio, sed pretium enim ligula non metus. Fusce rhoncus, nulla nec sodales egestas, quam odio mollis risus, in pellentesque ante ante ut dolor. Nunc a tellus libero. Vivamus aliquam dictum turpis at luctus. Morbi vestibulum vel nunc a mollis"
    },

    {
        postTitle: "[3] Titulo da postagem",
        description: "[3.1]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis augue ac orci bibendum, quis laoreet metus feugiat. Suspendisse potenti. Sed eu leo quis massa cursus hendrerit in vel risus. Mauris nec odio nec massa eleifend sagittis. Fusce rhoncus, lacus nec congue hendrerit, est dui dignissim odio, sed pretium enim ligula non metus. Fusce rhoncus, nulla nec sodales egestas, quam odio mollis risus, in pellentesque ante ante ut dolor. Nunc a tellus libero. Vivamus aliquam dictum turpis at luctus. Morbi vestibulum vel nunc a mollis"
    }
]
export function ArticleList() {
    return (
        <div className="aticle-list">
        {ARTICLES.map((art) =>  <Article 
         postTitle={art.postTitle}
         description={art.description}/>)}
        </div>
    )
}