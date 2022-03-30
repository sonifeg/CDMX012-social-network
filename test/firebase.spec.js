// importamos la funcion que vamos a testear
import { createNewUsers } from '../src/lib/firebase.js';

describe('createNewUsers', () => {
  it('should be a function', () => {
    expect(typeof createNewUsers).toBe('function');
  });
});
