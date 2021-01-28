import request from 'supertest'
import { app } from '../../app'

// testing a valid request

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
});

// testing an invalid email

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test.com',
      password: 'password'
    })
    .expect(400);
});


// testing an invalid password

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(400);
});

// testing an empty email and password

it('returns a 400 with an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({})
    .expect(400);
});

// testing duplicating accounts

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response=await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
})
