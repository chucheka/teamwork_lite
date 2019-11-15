import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';
import token from './token';

const { expect } = chai;

chai.use(chaiHttp);

describe('Comments', () => {
	// const articleItem = {
	// 	title: 'Article created by test file',
	// 	article: 'React dhhfhhfhhfhfhfhhffhhf',
	// 	tag: 'politics'
	// };
	// const commentItem = {
	//   comment: 'Test comment'
	// };

	// before('Create an  to comment on', (done) => {
	// 	chai
	// 		.request(app)
	// 		.post('/api/v1/articles')
	// 		.set('authorization', token)
	// 		.send(articleItem)
	// 		.then((res) => {
	// 			done();
	// 		})
	// 		.catch((err) => {
	// 			done(err);
	// 		});
	// });

	describe('/Comment/{commentId}/flag', () => {
		// beforeEach('Creat a comment', (done) => {
		// 	let articleId = 1;
		// 	chai
		// 		.request(app)
		// 		.post(`/api/v1/articles/${articleId}/comment`)
		// 		.set('authorization', token)
		// 		.send(commentItem)
		// 		.then((res) => {
		// 			done();
		// 		})
		// 		.catch((err) => {
		// 			done(err);
		// 		});
		// });
		// beforeEach('Creat a comment', (done) => {
		// 	let articleId = 1;
		// 	chai
		// 		.request(app)
		// 		.post(`/api/v1/articles/${articleId}/comment`)
		// 		.set('authorization', token)
		// 		.send({ comment: 'First comment created' })
		// 		.then((res) => {
		// 			done();
		// 		})
		// 		.catch((err) => {
		// 			done(err);
		// 		});
		// });
		it.skip('PATCH /comments/{commentId}/flag : Should flag a comment', (done) => {
			const commentId = 1;
			chai
				.request(app)
				.patch(`/api/v1/comments/${commentId}/flag`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('message', 'Comment has been flagged as inappropriate');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('PATCH /comments/{commentId}/flag : Should flag a comment', (done) => {
			const commentId = 419;
			chai
				.request(app)
				.patch(`/api/v1/comments/${commentId}/flag`)
				.set('authorization', token)
				.then((res) => {
					expect(res).to.have.status(404);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Comment not found');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe('PATCH /comments/{commentId}: should be able to edit a comment', () => {
		it.skip('User should be able to edit his/her comment', (done) => {
			const commentId = 1;
			chai.request(app).patch(`/api/v1/comments/${commentId}`).set('authorization', token);
			send({ comment: 'Comment editted' })
				.then((res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'success');
					expect(res.body).to.have.property('message', 'Comment successfully editted');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('User should not be able to edit comment with invalid ID', (done) => {
			const commentId = 419;
			chai
				.request(app)
				.patch(`/api/v1/comments/${commentId}`)
				.set('authorization', token)
				.send({ comment: 'Invalid id comment' })
				.then((res) => {
					expect(res).to.have.status(404);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('status', 'error');
					expect(res.body).to.have.property('error', 'Comment not found');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
});
