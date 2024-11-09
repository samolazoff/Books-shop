import './StartBlock.scss';

import {Link} from 'react-router-dom';

function StartBlock(){
    return (
        <section className="block-start">
            <ul className="buttons-search">
                <li className="buttons-search-item">
                    <button type='button' className='buttons-search-item__btn'>
                        Top all time
                    </button>
                </li>
            </ul>
            <h2 className="block-title">Shop</h2>
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