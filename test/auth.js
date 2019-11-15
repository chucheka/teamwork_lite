import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);
describe('Auth User', () => {
	describe.only('POST /api/v1/auth/create_user', () => {
		const user = {
			firstName: 'Chike',
			lastName: 'Ucheka',
			email: 'ryanucheka@gmail.com',
			password: 'chike22ucheka',
			password2: 'chike22ucheka',
			gender: 'Male',
			jobRole: 'Senior Engineer',
			department: 'IT',
			address: 'Area M World Bank Housing Estate'
		};
		it('Create a new employee account on app', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.set('content-type', 'application/json')
				.send(user)
				.then((res) => {
					console.log(res.body.data.token);
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.include.all.keys('status', 'data');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.include.all.keys('message', 'token', 'userId');
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
