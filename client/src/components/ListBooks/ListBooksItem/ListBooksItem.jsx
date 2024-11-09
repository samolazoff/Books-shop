import  './ListBooksItem.scss';

import {Link} from 'react-router-dom';

function ListBooksItem() {
    return(
        <li className="list-books-item">
            <Link>
                <img src="" alt="" className="books-item__img" />
            </Link>
            <Link className="books-item__title">Time is time</Link>
            <Link className="books-item__author">F.M.Dostaevskiy</Link>
            <footer className="list-books-item-footer">
                <span className="list-books-item-footer__top">4.71</span>
                <span className="list-books-item-footer__price">5.99</span>
            </footer>
        </li>
    )
};

export default ListBooksItem;