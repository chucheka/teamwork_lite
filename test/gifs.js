import chai from 'chai';
import fs from 'fs';
import chaiHttp from 'chai-http';
import app from '../api/app';
import token from './token';

const { expect } = chai;
chai.use(chaiHttp);
describe('Gifs Endpoints', () => {
	const gif = {
		title: 'Complete Guide to React'
	};

	// before('Create gif comment', async () => {
	// 	try {
	// 		queryRunner(createCommentQuery.createComment, [ 1, , 1, 'Initial comment for gif 1' ]);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });
	describe('GIFS SUITE', () => {
		it('POST /api/v1/gifs:Should successfully upload a gifs', (done) => {
			chai
				.request(app)
				.post('/api/v1/gifs')
				.set('authorization', token)
				.set('content-type', 'multipart/form-data')
				.field('title', gif.title)
				.attach('image', fs.readFileSync(`${__dirname}/skeleton.gif`), 'skeleton.gif')
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
		it('POST /api/v1/gifs:User with invalid token cannot post gif', (done) => {
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
		it('GET /api/v1/gifs/{gifId}:Should be able to get specific gif with gifId', (done) => {
			const gifId = 1;
			chai
				.request(app)
				.get(`/api/v1/gifs/${gifId}`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.include.all.keys('id', 'createdOn', 'title', 'imageUrl', 'comments');
					expect(res.body.data.comments).to.be.an('array');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('GET /api/v1/gifs/{gifId}:Should not be able to get gif with invalid gifId', (done) => {
			const gifId = 419; // 419 is an invalid gif ID
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
		it.skip('POST /api/v1/gifs/{gifId}/comment:Users should be able to post comments on an gif', (done) => {
			const gifId = 1;
			chai
				.request(app)
				.post(`/api/v1/gifs/${gifId}/comment`)
				.set('authorization', token)
				.send({
					comment: 'Nice gif dear'
				})
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('data');
					expect(res.body.data).to.have.property('message', 'Comment successfully created');
					expect(res.body.data).to.include.any.keys(
						'message',
						'createdOn',
						'gifTitle',
						'imageUrl',
						'comment'
					);
					expect(res.body.data.comment).to.be.a('string');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('POST /api/v1/gifs/{gifId}/comment:Should not comment on a  gif with invalid gifId', (done) => {
			const gifId = 419; // Invalid gif ID
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
		it('PATCH /api/v1/gifs/${gifId}/flag:Should be able to flag a gif as inapropriate', (done) => {
			const gifId = 1;
			chai
				.request(app)
				.patch(`/api/v1/gifs/${gifId}/flag`)
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
		it('DELETE /api/v1/gifs/{gifId}:Should delete an gif with give gifId', (done) => {
			const gifId = 1;
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
		it('DELETE /api/v1/gifs/{gifId}:Should not delete an gif with invalid gifId', (done) => {
			const gifId = 419; // Invalid gif ID
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
	// describe.skip('PATCH /api/v1/gifs/:gifId/comment', () => {
	// 	it('Users should be able to edit comment(s) on a gif', (done) => {
	// 		Comment.comment = 'Change my comment message';
	// 		chai
	// 			.request(app)
	// 			.patch(`/api/v1/gifs/${gifId}/comment`)
	// 			.set('authorization', token)
	// 			.send(Comment)
	// 			.then((res) => {
	// 				expect(res).to.have.status(201);
	// 				expect(res.body).to.be.an('object');
	// 				expect(res.body).to.have.property('status', 'success');
	// 				expect(res.body).to.have.property('data');
	// 				expect(res.body.data).to.have.property('message', 'Comment successfully editted');
	// 				expect(res.body.data).to.include.all.keys(
	// 					'message',
	// 					'createdOn',
	// 					'gifTitle',
	// 					'imageUrl',
	// 					'comment'
	// 				);
	// 				expect(res.body.data.comment).to.be.a('string');
	// 				expect(res.body.data.comment).to.equal(Comment.comment);
	// 				done();
	// 			})
	// 			.catch((err) => {
	// 				done(err);
	// 			});
	// 	});
	// });

	// describe.skip('Delete /api/v1/gifs/:gifId', () => {
	// 	it('Should be able to delete gif(s) flagged as inappropriate', (done) => {
	// 		chai
	// 			.request(app)
	// 			.delete(`/api/v1/gifs/${gifId}`)
	// 			.query({ flagged: true })
	// 			.set('authorization', token)
	// 			.then((res) => {
	// 				expect(res).to.have.status(201);
	// 				expect(res.body).to.be.an('object');
	// 				expect(res.body).to.have.property('status', 'success');
	// 				expect(res.body).to.have.property('data');
	// 				expect(res.body.data).to.have.property('message', 'Gif flagged as inapropriate deleted');
	// 				done();
	// 			})
	// 			.catch((err) => {
	// 				done(err);
	// 			});
	// 	});
	// });
});
