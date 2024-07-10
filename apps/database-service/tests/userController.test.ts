// import request from 'supertest';
// import express, { Request, Response, NextFunction } from 'express';
// import { PrismaClient } from '@prisma/client';
// import { loginUser, registerUser } from '../src/controllers/UserController';

// const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());

// app.post('/register', (req: Request, res: Response, next: NextFunction) => {
//     registerUser(req, res, next);
// });

// app.post('/login', (req: Request, res: Response, next: NextFunction) => {
//     loginUser(req, res, next);
// });

// beforeAll(async () => {
//     await prisma.$connect();
// });

// afterAll(async () => {
//     await prisma.$disconnect();
// });

// describe('User Registration and Login', () => {
//     it('should register a user', async () => {
//         const response = await request(app)
//             .post('/register')
//             .send({
//                 email: 'testuser@example.com',
//                 name: 'Test User',
//                 password: 'password123'
//             });

//         expect(response.status).toBe(201);
//         expect(response.body).toHaveProperty('email', 'testuser@example.com');
//     });

//     it('should login a user', async () => {
//         const response = await request(app)
//             .post('/login')
//             .send({
//                 email: 'testuser@example.com',
//                 password: 'password123'
//             });

//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty('message', 'Login successful');
//         expect(response.body).toHaveProperty('token');
//     });

//     it('should fail to register a user with invalid data', async () => {
//         const response = await request(app)
//             .post('/register')
//             .send({
//                 email: 'invalid-email',
//                 name: 'Test User'
//             });

//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('message', 'Invalid user data');
//     });

//     it('should fail to login a user with invalid credentials', async () => {
//         const response = await request(app)
//             .post('/login')
//             .send({
//                 email: 'testuser@example.com',
//                 password: 'wrongpassword'
//             });

//         expect(response.status).toBe(401);
//         expect(response.body).toHaveProperty('message', 'Invalid email or password');
//     });
// });
