import request from 'supertest'
import { app } from '../../app'

// testing when the account doesn't exist

it('fails when an email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

// testing when an invalid password is supplied

it('it fails when an incorrect password is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
    await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password1'
    })
    .expect(400);
});

// testing the cookie

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
    await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200);
    expect(response.get('Set-Cookie')).toBeDefined();
});