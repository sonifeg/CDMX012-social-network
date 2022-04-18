/* eslint-disable max-len */
import {
  createNewUsers, googleSignIn, logOut, shootIn,
} from '../src/__mocks__/lib/firebase-auth.js';

jest.mock('../src/__mocks__/firebase-imports.js');

describe('createNewUsers', () => {
  it('debería ser una función', () => {
    expect(typeof createNewUsers).toBe('function');
  });
});

describe('shootIn', () => {
  it('debería ser una función', () => {
    expect(typeof shootIn).toBe('function');
  });
});

describe('googleSignIt', () => {
  it('debería ser una función', () => {
    expect(typeof googleSignIn).toBe('function');
  });
});

describe('logOut', () => {
  it('debería ser una función', () => {
    expect(typeof logOut).toBe('function');
  });
});
