const test = require('tape');

const supertest = require('supertest');

const app = require('./../src/app');

test('test success translate', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err, 'should not return err');
      const isInclude = res.text.includes('translator');
      t.equals(isInclude, true, 'must page include translator');
      t.end();
    });
});

test('test success file not found', (t) => {
  supertest(app)
    .get('/jhgvjgv')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err, 'should not return err');
      const isInclude = res.text.includes('not found');
      t.equals(isInclude, true, 'must page include file not found');
      t.end();
    });
});
