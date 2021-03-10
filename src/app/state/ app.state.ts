import { Book } from '../book-list/books.model';
// It's main state structure of app
export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
