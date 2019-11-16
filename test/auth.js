import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';
import token from './token';
import notAdminToken from './notAdminToken';
const { expect } = chai;

chai.use(chaiHttp);
describe('Auth User', () => {
	describe('POST /api/v1/auth/create_user', () => {
		const user = {
			firstName: 'Brad',
			lastName: 'Traversy',
			email: 'traversy@gmail.com',
			password: 'brad22traversy',
			password2: 'brad22traversy',
			gender: 'Male',
			jobRole: 'CTO',
			department: 'IT',
			address: 'Area M World Bank Housing Estate'
		};
		it('Create a new employee account on app', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.set('content-type', 'application/json')
				.set('authorization', token)
				.send(user)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.include.any.keys('status', 'data');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.include.any.keys('message', 'token', 'userId');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('Only admin can create user usin admin token', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.set('authorization', notAdminToken)
				.send(user)
				.then((res) => {
					expect(res).to.have.status(401);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Only admin can create an account');
					expect(res.body).to.include.any.keys('status', 'error');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('Should not create user if email already exist', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.set('authorization', token)
				.send(user)
				.then((res) => {
					expect(res).to.have.status(400);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Email already taken!!');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('should login user with right credentials and return a token', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/signin')
				.send({
					email: user.email,
					password: user.password
				})
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.include.any.keys('token', 'userId', 'message');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it("Should not create user if password don't match", (done) => {
			user.password = 'chike22';
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.set('authorization', token)
				.send(user)
				.then((res) => {
					expect(res).to.have.status(400);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', "Passwords don't match!!");
					done();
				})
				.catch((err) => {
					done(err);
				});
		});

		it('Should not log in unregistered user', (done) => {
			user.email = 'notanemployee@gmail.com';
			user.password = 'chdjdjdfhf';

			chai
				.request(app)
				.post('/api/v1/auth/signin')
				.send({
					email: user.email,
					password: user.password
				})
				.then((res) => {
					expect(res).to.have.status(400);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Invalid credentials');
					done();
				})
				.catch((err) => done(err));
		});
	});
});
