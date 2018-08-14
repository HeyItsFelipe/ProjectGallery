import rootReducer from './reducer';

describe('rootReducer', () => {
  it('should load all cards on page load', () => {
    let state;
    state = rootReducer(undefined, {});
    expect(state).toEqual({ search: '' });
  });

  it('should load certain cards based on input', () => {
    let state;
    state = rootReducer({ search: '' }, { type: 'SEARCH', payload: 'react' });
    expect(state).toEqual({ search: 'react' });
  });
});
