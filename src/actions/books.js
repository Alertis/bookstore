import axios from 'axios';
import store from '../store/store';

export const BOOK_LIST="BOOK_LIST";


export function bookList(){
    return dispatch => {
        store.dispatch({
            type:BOOK_LIST,
            payload:axios.get(`http://localhost:3000/api/books.json`)
            .then(result => (result.data))
        });
    }
}
