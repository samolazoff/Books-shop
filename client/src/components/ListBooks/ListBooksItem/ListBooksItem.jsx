import  './ListBooksItem.scss';

import {Link} from 'react-router-dom';

import testImg from '../../../assets/img/test.jpg'

function ListBooksItem(props) {
    const book=props.data;
    return(
        <li className="list-books-item">
            <Link to={'/book:'+book.id}>
                <img src={testImg} alt={book.title} className="books-item__img" />
            </Link>
            <Link className="books-item__title" to = {'/book'+book.id}>{book.title}</Link>
            <Link className="books-item__author" to = {'/author:'+book.id_author}>{book.author}</Link>
            <footer className="list-books-item-footer">
                <span className="list-books-item-footer__top">{book.top}</span>
                <span className="list-books-item-footer__price">{book.price}</span>
            </footer>
        </li>
    )
};

export default ListBooksItem;