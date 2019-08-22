const functions = require('./functions');

// beforeEach(()=> initDatabase())
// afterEach(()=> closeDatabase())

// beforeAll(()=> initDatabase())
// afterAll(()=> closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log("checking name...")

describe('checking name', ()=> {
  beforeEach(()=> nameCheck());

  test('user is Jeff', ()=> {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  })

  test('user is Karen', ()=> {
    const user = 'Karen';
    expect(user).toBe('Karen');
  })
})

test('2+2 = 4', () => {
  expect(functions.add(2, 2)).toBe(4);
})
test('2+2 != 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
})
test('should be null', () => {
  expect(functions.isNull()).toBeNull();
})
test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})
test('user should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  })
})
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
})
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
})

// // promise
// test('user fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham')
//   })
// })

//async await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
})