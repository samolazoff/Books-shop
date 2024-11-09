import './StartBlock.scss';

import ButtonsSearch from './ButtonsSearch/ButtonsSearch';
import ListBooks from '../ListBooks/ListBooks';

function StartBlock(){
    return (
        <section className="block-start">
            <ButtonsSearch></ButtonsSearch>
            <div className="block-start-titles">
                <h2 className="block-title">Shop</h2>
                <span className="what-are-books">Random 8 books</span>
            </div>
            <ListBooks></ListBooks>
        </section>
    )
}

export default StartBlock;