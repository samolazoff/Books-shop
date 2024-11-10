import './ListBooks.scss';

import ListBooksItem from './ListBooksItem/ListBooksItem';

function ListBooks(){
    return (
        <ul className="list-books">
            <ListBooksItem></ListBooksItem>
        </ul>
    )
};

export default ListBooks;