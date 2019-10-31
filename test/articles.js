import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Articles Endpoints', () => {
  let token;
  let articleId;
  const article = {
    title: 'Complete Guide to React',
    article: 'React hooks enable you use state with functional components'
  };
  const Comment = {
    comment: 'Nice article dear'
  };
  describe('POST /api/v1/articles', () => {
    it('Should successfully create an article', (done) => {
      chai
        .request(app)
        .post('/api/v1/articles')
        .set('Authourization', `Bearer${token}`)
        .send(article)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.include.all.keys('message', 'articleId', 'createdOn', 'title', 'article');
          expect(res.body.data.message).to.equal('Article successfully posted');
        })
        .catch((err) => {
          done(err);
        });
    });
    it('Employee with invalid token cannot post article', (done) => {
      token = 'thistokenisinvalid';

      chai
        .request(app)
        .post('/api/v1/articles')
        .set('Authourization', `Bearer${token}`)
        .send(article)
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
  describe('Get /api/articles/:articleId', () => {
    it('Should be able to get specific article with articleId', (done) => {
      chai
        .request(app)
        .get(`/api/v1/articles/${articleId}`)
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(200);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.include.all.keys('id', 'createdOn', 'title', 'article', 'comments');
          expect(res.body.data.comments).to.be('array');
          expect(res.body.data.comments[0]).to.include.all.keys('commentId', 'comment', 'authourId');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('Should not be able to get article with invalid articleId', (done) => {
      articleId = 419; // 419 is an invalid article ID
      chai
        .request(app)
        .get(`/api/v1/articles/${articleId}`)
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(404);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'error');
          expect(res.body).to.have.property('error', 'Article not found');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('PATCH /api/v1/articles/:articleId', () => {
    it('Should be able to edit article when logged in', (done) => {
      article.title = 'Changed the title of article';
      chai
        .request(app)
        .patch(`/api/v1/articles/${articleId}`)
        .set('Authourization', `Bearer${token}`)
        .send(article)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.include.all.keys('message', 'title', 'article');
          expect(res.body.data.message).to.equal('Article successfully updated');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('Should not update article with invalid articleId', (done) => {
      articleId = 419; // 419 is an invalid article ID
      chai
        .request(app)
        .patch(`/api/v1/articles/${articleId}`)
        .set('Authourization', `Bearer${token}`)
        .send(article)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(404);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'error');
          expect(res.body).to.have.property('error', 'Article not found');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('DELETE /api/v1/articles/:articleId', () => {
    it('Should delete an article with give articleId', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/artciles/${articleId}`)
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body.data).to.have.property('message', 'Article successfully deleted');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
    it('Should not delete an article with invalid articleId', (done) => {
      articleId = 419; // Invalid article ID
      chai
        .request(app)
        .delete(`/api/v1/artciles/${articleId}`)
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(404);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'error');
          expect(res.body).to.have.property('error', 'Article not found');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('POST /api/v1/articles/:articleId/comment', () => {
    it('Users should be able to post comments on an article', (done) => {
      chai
        .request(app)
        .post('/api/v1/articles/:articleId/comment')
        .set('Authourization', `Bearer${token}`)
        .send(Comment)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Comment successfully created');
          expect(res.body.data).to.include.all.keys(
            'message',
            'createdOn',
            'articleTitle',
            'article',
            'comment'
          );
          expect(res.body.data.comment).to.be('string');
          expect(res.body.data.comment).to.equal('Nice article dear');
          done();
        });
    });
  });
  describe('PATCH /api/v1/articles/:articleId/comment', () => {
    it('Users should be able to edit comment(s) on an article', (done) => {
      Comment.comment = 'Change my comment message';
      chai
        .request(app)
        .patch('/api/v1/articles/:articleId/comment')
        .set('Authourization', `Bearer${token}`)
        .send(Comment)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Comment successfully editted');
          expect(res.body.data).to.include.all.keys(
            'message',
            'createdOn',
            'articleTitle',
            'article',
            'comment'
          );
          expect(res.body.data.comment).to.be('string');
          expect(res.body.data.comment).to.equal('Change my comment message');
          done();
        });
    });
  });
  describe('PATCH /api/v1/articles/:articleId', () => {
    it('Should be able to flag a article as inapropriate', (done) => {
      chai
        .request(app)
        .patch(`/api/v1/articles/${articleId}`)
        .query({ flagged: true })
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Article has been flagged as inapropriate');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
  describe('Delete /api/v1/articles/:articleId', () => {
    it('Should be able to delete article(s) flagged as inapropriate', (done) => {
      chai
        .request(app)
        .delete(`/api/v1/articles/${articleId}`)
        .query({ flagged: true })
        .set('Authourization', `Bearer${token}`)
        .then((res) => {
          expect(req).to.have.header('Authourization', `Bearer${token}`);
          expect(res).to.have.status(201);
          expect(res.body).to.be('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.property('message', 'Article flagged as inapropriate deleted');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
});
