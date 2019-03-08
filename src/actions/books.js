import axios from 'axios';
import store from '../store/store';

export const BOOK_LIST="BOOK_LIST";
export const BOOK_DETAIL="BOOK_DETAIL";



export function bookList(){
    return dispatch => {
        store.dispatch({
            type:BOOK_LIST,
            payload:axios.get(`http://localhost:3000/api/books.json`)
            .then(result => (result.data))
        });
    }
}

export function bookDetail(uid){
    return dispatch => {
        store.dispatch({
            type:BOOK_LIST,
            payload:axios.get(`http://localhost:3000/api/books.json`)
            .then(result => {
                const data =result.data;
                return data.books.find(item => item.isbn==uid)
                 //result.data.map(item => console.log(item));
            })
        });
    }
}