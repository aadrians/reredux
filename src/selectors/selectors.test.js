import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    const authors = [
      {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
      {id: 'arya-adriansyah', firstName: 'Arya', lastName: 'Adriansyah'}
    ];

    const expected = [
      {value: 'cory-house', text: 'Cory House'},
      {value: 'arya-adriansyah', text: 'Arya Adriansyah'}
    ];

    expect(authorsFormattedForDropdown(authors)).toEqual(expected);
  });
});
