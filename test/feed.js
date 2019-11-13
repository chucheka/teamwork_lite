import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';
import token from './token';
const { expect } = chai;

chai.use(chaiHttp);

describe('GET /api/v1/feed', () => {
	it('Should get all articles and  gifs', (done) => {
		chai
			.request(app)
			.get('/api/v1/feed')
			.set('authorization', token)
			.then((res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an('object');
				expect(res.body).to.have.property('status', 'success');
				expect(res.body).to.have.property('data');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0]).to.be.an('object');
				expect(res.body.data[0]).to.include.any.keys('id', 'createdOn', 'title', 'article', 'url', 'authourId');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
	// it('Should be empty is there are not feed(articles/gifs', (done) => {
	// 	chai
	// 		.request(app)
	// 		.get('/api/v1/feed')
	// 		.set('authorization', token)
	// 		.then((res) => {
	// 			expect(res).to.have.status(404);
	// 			expect(res.body).to.be.an('object');
	// 			expect(res.body).to.have.property('status', 'error');
	// 			expect(res.body).to.have.property('error', 'There are no articles or gifs');
	// 			done();
	// 		})
	// 		.catch((err) => {
	// 			done(err);
	// 		});
	// });
});
// describe.skip('GET /api/v1/feed?tag=tagName', () => {
// 	const tagName = 'Programming';
// 	it('Should be able to get all articles and/or gifs with a particular tag', (done) => {
// 		chai
// 			.request(app)
// 			.get('/api/v1/feed')
// 			.query({ tag: tagName })
// 			.set('authorization', token)
// 			.then((res) => {
// 				expect(res).to.have.status(200);
// 				expect(res.body).to.be.an('object');
// 				expect(res.body).to.have.property('status', 'success');
// 				expect(res.body).to.have.property('data').which.is('array');
// 				expect(res.body.data[0]).to.be.an('object');
// 				expect(res.body.data[0]).to.include.any.keys('id', 'createdOn', 'title', 'article', 'url', 'authourId');
// 				done();
// 			})
// 			.catch((err) => {});
// 	});
// 	it('Should be empty is there are no articles/gifs with tagName', (done) => {
// 		chai
// 			.request(app)
// 			.get('/api/v1/feed')
// 			.query({ tag: tagName })
// 			.set('authorization', token)
// 			.then((res) => {
// 				expect(res).to.have.status(404);
// 				expect(res.body).to.be.an('object');
// 				expect(res.body).to.have.property('status', 'error');
// 				expect(res.body).to.have.property('error', 'There are no articles or gifs with tagName');
// 				done();
// 			})
// 			.catch((err) => {
// 				done(err);
// 			});
// 	});
// });
