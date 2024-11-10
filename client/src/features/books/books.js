import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
    name: 'booksSlice',
    initialState: {
        books: [
            {
                id: '1',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '2',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '3',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '4',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '5',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '6',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '7',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
            {
                id: '8',
                author: 'F.M.Dostaevskiy',
                id_author: '1',
                title: 'Time is time',
                id_book: '1',
                top: '8.46',
                price: '4.96',
            },
        ]
    },
    reducers: {  }
});

// export const { } = booksSlice.actions;

export default booksSlice.reducer;