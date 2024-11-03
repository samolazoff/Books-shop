
import {Link} from 'react-router-dom';

function MiniBlogPost(props) {
    const data=props.data;
    return(
        <li className="mini-blog-news__items">
            <h3 className='title'>
                <Link to='/autor:id'>{data.author}</Link>
                <Link to='/book:id'>{data.book}</Link>
            </h3>
            <Link link to={'/post:'+data.id}>
                <p className='coment-txt'>{data.coment}</p>
            </Link>
            <Link link to={'/post:'+data.id} className='user-box'>
                <img src={data.img} alt={data.user} />
                <span className='bloger-name'>{data.user}</span>
            </Link>
            
        </li>
    )

};

export default MiniBlogPost;