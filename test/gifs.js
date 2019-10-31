import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Gifs Endpoints', () => {
  let token;
  let gifId;
  const gif = {
    title: 'Complete Guide to React',
    image: 'React hooks enable you use state with functional components'
  };
  const Comment = {
    comment: 'Nice gif dear'
  };
  describe('POST /api/v1/gifs', () => {
    it('Should successfully upload a gifs', (done) => {
      chai
        .request(app)
        .post('/api/v1/gifs')
        .set('Authourization', `Bearer${token}`)
        .set('content-type', 'multipart/form-data')
        .send(gif)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.include.all.keys('gifId', 'message', 'createdOn', 'title', 'imageUrl');
          expect(res.body.data.message).to.equal('Gif image successfully posted');
        })
        .catch((err) => {
          done(err);
        });
    });
    it('User with invalid token cannot post gif', (done) => {
      token = 'thistokenisinvalid';

      chai
        .request(app)
        .post('/api/v1/gifs')
        .set('Authourization', `Bearer${token}`)
        .send(gif)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(403);
          expect(res.body).to.be('object');
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
        .set('Authourization', `Bearer${token}`)
        .set('accept', 'multipart/form-data')
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(200);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.include.all.keys('id', 'createdOn', 'title', 'imageUrl', 'comments');
          expect(res.body.data.comments).to.be('array');
          expect(res.body.data.comments[0]).to.include.all.keys('commentId', 'comment', 'authourId');
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
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(404);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'error');
          expect(res.body).to.have.property('error', 'Gif not found');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('DELETE /api/v1/gifs/:gifId', () => {
    it('Should delete an gif with give gifId', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/gifs/${gifId}`)
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
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
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(404);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'error');
          expect(res.body).to.have.property('error', 'Gif not found');
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
        .post('/api/v1/gifs/:gifId/comment')
        .set('Authourization', `Bearer${token}`)
        .send(Comment)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Comment successfully created');
          expect(res.body.data).to.include.all.keys('message', 'createdOn', 'gifTitle', 'comment');
          expect(res.body.data.comment).to.be('string');
          expect(res.body.data.comment).to.equal(Comment.comment);
          done();
        });
    });
  });
  describe('PATCH /api/v1/gifs/:gifId/comment', () => {
    it('Users should be able to edit comment(s) on a gif', (done) => {
      Comment.comment = 'Change my comment message';
      chai
        .request(app)
        .patch('/api/v1/gifs/:gifId/comment')
        .set('Authourization', `Bearer${token}`)
        .send(Comment)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Comment successfully editted');
          expect(res.body.data).to.include.all.keys('message', 'createdOn', 'gifTitle', 'comment');
          expect(res.body.data.comment).to.be('string');
          expect(res.body.data.comment).to.equal('Change my comment message');
          done();
        });
    });
  });

  describe('PATCH /api/v1/gifs/:gifId', () => {
    it('Should be able to flag a gif as inapropriate', (done) => {
      chai
        .request(app)
        .patch(`/api/v1/gifs/${gifId}`)
        .query({ flagged: true })
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Gif has been flagged as inapropriate');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('Delete /api/v1/gifs/:gifId', () => {
    it('Should be able to delete gif(s) flagged as inapropriate', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/gifs/${gifId}`)
        .query({ flagged: true })
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
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
});
