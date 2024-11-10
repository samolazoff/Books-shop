import './ListBooks.scss';

import ListBooksItem from './ListBooksItem/ListBooksItem';

import {useSelector} from 'react-redux';

function ListBooks(){
    const listBooks= useSelector(state => state.books.books);
    return (
        <ul className="list-books">
            {
                listBooks.map((item) => {
                    return (
                        <ListBooksItem data={item} key={item.id}></ListBooksItem>
                    )
                })
            }
            
        </ul>
    )
};

export default ListBooks;