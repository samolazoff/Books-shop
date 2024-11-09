import './StartBlock.scss';

import {Link} from 'react-router-dom';

import ButtonsSearch from './ButtonsSearch/ButtonsSearch';

function StartBlock(){
    return (
        <section className="block-start">
            <ButtonsSearch></ButtonsSearch>
            <div className="block-start-titles">
                <h2 className="block-title">Shop</h2>
                <span className="what-are-books">Random 8 books</span>
            </div>
            <ul className="list-books">
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
            </ul>
        </section>
    )
}

export default StartBlock;