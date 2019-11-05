import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';
import token from './token';
const { expect } = chai;

chai.use(chaiHttp);

describe('Gifs Endpoints', () => {
	let gifId = 1;
	const gif = {
		title: 'Complete Guide to React',
		image: 'www.cloudinary.io/images/avatar.gif'
	};
	const Comment = {
		comment: 'Nice gif dear'
	};
	describe('POST /api/v1/gifs', () => {
		it('Should successfully upload a gifs', (done) => {
			chai
				.request(app)
				.post('/api/v1/gifs')
				.set('authorization', token)
				.send(gif)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.include.any.keys('gifId', 'message', 'createdOn', 'title', 'imageUrl');
					expect(res.body.data.message).to.equal('Gif successfully posted');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('User with invalid token cannot post gif', (done) => {
			chai
				.request(app)
				.post('/api/v1/gifs')
				.set('authorization', 'invalidtoken')
				.send(gif)
				.then((res) => {
					expect(res).to.have.status(403);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Invalid token supplied');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe('Get /api/gifs/:gifId', () => {
		it('Should be able to get specific gif with gifId', (done) => {
			chai
				.request(app)
				.get(`/api/v1/gifs/${gifId}`)
				.set('authorization', token)
				// .set('accept', 'multipart/form-data')
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.include.all.keys('id', 'createdOn', 'title', 'imageUrl', 'comments');
					expect(res.body.data.comments).to.be.an('array');
					expect(res.body.data.comments[0]).to.include.any.keys('commentId', 'comment', 'authourId');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('Should not be able to get gif with invalid gifId', (done) => {
			gifId = 419; // 419 is an invalid gif ID
			chai
				.request(app)
				.get(`/api/v1/gifs/${gifId}`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(404);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', `Gif with Id ${gifId} not found`);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});

	describe('POST /api/v1/gifs/:gifId/comment', () => {
		it('Users should be able to post comments on an gif', (done) => {
			chai
				.request(app)
				.post(`/api/v1/gifs/${gifId}/comment`)
				.set('authorization', token)
				.send(Comment)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.have.property('message', 'Comment successfully created');
					expect(res.body.data).to.include.all.keys(
						'message',
						'createdOn',
						'gifTitle',
						'imageUrl',
						'comment'
					);
					expect(res.body.data.comment).to.be.a('string');
					expect(res.body.data.comment).to.equal(Comment.comment);
					done();
				});
		});
		it('Should not comment on a  gif with invalid gifId', (done) => {
			gifId = 419; // Invalid gif ID
			chai
				.request(app)
				.post(`/api/v1/gifs/${gifId}`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(404);
					expect(res.body).to.be.an('object');
					// expect(res.body).to.have.property('status', 'error');
					// expect(res.body).to.have.property('error', 'Gif not found');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe('PATCH /api/v1/gifs/:gifId', () => {
		it('Should be able to flag a gif as inapropriate', (done) => {
			chai
				.request(app)
				.patch(`/api/v1/gifs/${gifId}/flag`)
				// .query({ flagged: true })
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.have.property('message', 'Gif has been flagged');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe.skip('PATCH /api/v1/gifs/:gifId/comment', () => {
		it('Users should be able to edit comment(s) on a gif', (done) => {
			Comment.comment = 'Change my comment message';
			chai
				.request(app)
				.patch(`/api/v1/gifs/${gifId}/comment`)
				.set('authorization', token)
				.send(Comment)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.have.property('message', 'Comment successfully editted');
					expect(res.body.data).to.include.all.keys(
						'message',
						'createdOn',
						'gifTitle',
						'imageUrl',
						'comment'
					);
					expect(res.body.data.comment).to.be.a('string');
					expect(res.body.data.comment).to.equal(Comment.comment);
					done();
				});
		});
	});

	describe.skip('Delete /api/v1/gifs/:gifId', () => {
		it('Should be able to delete gif(s) flagged as inappropriate', (done) => {
			chai
				.request(app)
				.delete(`/api/v1/gifs/${gifId}`)
				.query({ flagged: true })
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.have.property('message', 'Gif flagged as inapropriate deleted');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe('DELETE /api/v1/gifs/:gifId', () => {
		it('Should delete an gif with give gifId', (done) => {
			gifId = 1;
			chai
				.request(app)
				.delete(`/api/v1/gifs/${gifId}`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body.data).to.have.property('message', 'Gif successfully deleted');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('Should not delete an gif with invalid gifId', (done) => {
			gifId = 419; // Invalid gif ID
			chai
				.request(app)
				.delete(`/api/v1/gifs/${gifId}`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(404);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Gif not found');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
});
