import { createAction, props } from '@ngrx/store';

export const addBook = createAction(
  // [Category] this type of categorising is only for understanding the action and very helpful for inspecting
  '[Book List] Add Book',
  props<{ bookId }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book }>()
);
