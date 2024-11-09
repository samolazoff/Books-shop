import './ButtonsSearch.scss';

function ButtonsSearch() {
    return(
        <ul className="buttons-search">
            <li className="buttons-search-item">
                <button type='button' className='buttons-search-item__btn' id='top-all-time'>
                    Top all time
                </button>
            </li>
            <li className="buttons-search-item">
                <button type='button' className='buttons-search-item__btn' id='top-month'>
                    Top month
                </button>
            </li>
            <li className="buttons-search-item">
                <button type='button' className='buttons-search-item__btn' id='new-books'>
                    New books
                </button>
            </li>
            <li className="buttons-search-item">
                <button type='button' className='buttons-search-item__btn' id='we-recomend'>
                    We recomend
                </button>
            </li>
            <li className="buttons-search-item">
                <button type='button' className='buttons-search-item__btn' id='we-recomend'>
                    8 random books
                </button>
            </li>
        </ul>
    )
};

export default ButtonsSearch;