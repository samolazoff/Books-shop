import './MiniBlog.scss';

import MiniBlogPost from './MiniBlogPost';

import { useSelector} from 'react-redux';

function MiniBlog () {
    const posts = useSelector(state => state.miniBlog.coments);
    return (
        <aside className="mini-blog">
            <h2 className="mini-blog-title">
                Blog
            </h2>
            <ul className='mini-blog-news'>
                {
                    posts.map((item)=>
                        (<MiniBlogPost key={item.id} data={item}></MiniBlogPost>)
                    )
                }
            </ul>
        </aside>
    )
};

export default MiniBlog;