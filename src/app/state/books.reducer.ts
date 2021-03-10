import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  // tslint:disable-next-line:no-shadowed-variable
  on(retrievedBookList, (state, { Book }) => [...Book])
);
