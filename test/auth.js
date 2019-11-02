import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Auth User', () => {
	const employeeDetails = {
		firstName: 'Chike',
		lastName: 'Ucheka',
		email: 'ryanucheka22@gmail.com',
		password: 'chike22ucheka',
		password2: 'chike22ucheka',
		gender: 'Male',
		jobRole: 'Senior Engineer',
		department: 'IT',
		address: 'Area M World Bank Housing Estate'
	};

	describe.only('POST /api/v1/auth/create_user', () => {
		it('Create a new employee account on app', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.set('content-type', 'application/json')
				.send(employeeDetails)
				.then((res) => {
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
				.send(employeeDetails)
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
		it("Should not create user if password don't match", (done) => {
			employeeDetails.password = 'chike22';
			chai
				.request(app)
				.post('/api/v1/auth/create-user')
				.send(employeeDetails)
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
	});
	describe('POST /api/v1/auth/signin', () => {
		it('should login user with right credentials and return a token', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/signin')
				.send({
					email: employeeDetails.email,
					password: employeeDetails.password
				})
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.include.all.keys('token', userId);
					doen();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('Should not log in user with Invalid email or password', (done) => {
			employeeDetails.email = 'Invalid email';
			employeeDetails.password = ' Invalid password';

			chai.request(app).post('/api/v1/auth/signin');
			send({
				email: employeeDetails.email,
				password: employeeDetails.password
			})
				.then((res) => {
					expect(res).to.have.status(400);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Invalid login credentials');
					doen();
				})
				.catch((err) => done(err));
		});
	});
});
