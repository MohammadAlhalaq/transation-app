const test = require('tape');

test('first test', (t) => {
  const actual = 2;
  t.deepEqual(actual, 2, '2 equals 2');
  t.end();
});
