import {BOOK_LIST} from '../actions/books'

const initialState={
    books:[]
}

export default (state=initialState, {type,payload}) => {
    switch(type){
        case BOOK_LIST:
            return{
                ...state,
                books:payload
            };
        default:
            return state;        
    }
}