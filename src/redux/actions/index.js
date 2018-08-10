import { SEARCH } from '../constants/action-types';

export const search = event => ({ type: SEARCH, payload: event.target.value });
