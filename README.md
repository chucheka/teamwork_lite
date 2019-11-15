[![Build Status](https://travis-ci.com/ucheka22/teamwork_lite.svg?branch=develop)](https://travis-ci.com/ucheka22/teamwork_lite)
[![Coverage Status](https://coveralls.io/repos/github/ucheka22/teamwork_lite/badge.svg?branch=develop)](https://coveralls.io/github/ucheka22/teamwork_lite?branch=develop)

# teamwork_lite
>Teamwork is an internal social network for employees of an organisation: It facilitates more interation among colleagues and promote team bonding


## GitHub Project Management Board
https://github.com/ucheka22/teamwork_lite/projects/1

## UI hosted on gh-pages
https://ucheka22.github.io/property-pro-lite/UI/

## APP Hosted On Heroku
https://my-property-pro.herokuapp.com

## Table of Content
 * [Getting Started](#getting-started)

* [Prerequisites for installation](#prerequisites-for-installation)
 
 * [Installation](#installation)

 * [Test](#test)
 
 * [API End Points Test Using Postman](#api-end-points-test-using-postman)

 * [Linting Style](#linting-style)
 
 * [Features](#features)
 
 * [Built With](#built-with)
 
 * [Author](#author)


## Getting Started

### Prerequisites for installation
1. Node js
2. Express
3. Git

### Installation
1. Clone this repository into your local machine:
```
e.g git clone https://github.com/ucheka22/property-pro-lite.git
```
2. Install dependencies 
```
e.g npm install.
```
3. Start the application by running the dev script.

```
e.g npm run dev
```

4. Install postman to test all endpoints on port 3000.

### Test
Run test use  ```npm run test```.

### API End Points Test Using Postman

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>DESCRIPTION</th></tr>

<tr><td>POST</td> <td>/api/v1/auth/create-user</td>  <td>Create user account</td></tr>

<tr><td>POST</td> <td>/api/v1/auth/signin</td>  <td>Login a user</td></tr>

<tr><td>POST</td> <td>/api/v1/articles</td>  <td>Create an article</td></tr>

<tr><td>POST</td> <td>/api/v1/gifs</td>  <td>Create a gif</td></tr>

<tr><td>PATCH</td> <td>/api/v1/articles/{articleId}</td>  <td>Edit an article</td></tr>

<tr><td>POST</td> <td>/api/v1/articles/{articleId}/comment</td>  <td>Comment on an article</td></tr>

<tr><td>POST</td> <td>/api/v1/gifs/{gifId}/comment</td>  <td>Comment on a gif</td></tr>

<tr><td>DELETE</td> <td>/api/v1/articles/{articleId}</td>  <td>Delete an article</td></tr>

<tr><td>DELETE</td> <td>/api/v1/gifs/{gifId}</td>  <td>Delete a gif</td></tr>

<tr><td>GET</td> <td>/api/v1/feed</td>  <td>View all articles and gifs starting from most recent</td></tr>

<tr><td>GET</td> <td>/api/v1/articles/{articleId}</td>  <td>View a specific article</td></tr>

<tr><td>GET</td> <td>/api/v1/gifs/{gifId}</td>  <td>View a specific gif</td></tr>

<tr><td>PATCH</td> <td>/api/v1/comments/{commentId </td>  <td>Users can edit thier comments</td></tr>

<tr><td>GET</td> <td>/api/v1/articles?tag={tagName}</td>  <td>View all articles with a particular tag name or category</td></tr>

<tr><td>PATCH</td> <td>/api/v1/articles/{articleId}/flag</td>  <td>Flag a specific article as inappropriate</td></tr>

<tr><td>PATCH</td> <td>/api/v1/gifs/{gifId}/flag</td>  <td>Flag a specific gif as inappropriate</td></tr>

<tr><td>PATCH</td> <td>/api/v1/comments/{commentId}/flag</td>  <td>Flag a specific comment as inappropriate</td></tr>

<tr><td>DELETE</td> <td>/api/v1/articles/{articleId}/flag</td>  <td>Admin can delete an article flagged as inappropriate</td></tr>

<tr><td>DELETE</td> <td>/api/v1/gifs/{gifId}/flag</td>  <td>Admin can delete a gif flagged as inappropriate</td></tr>

<tr><td>DELETE</td> <td>/api/v1/comments/{commentId}/flag</td>  <td>Admin can delete a comment flagged as inappropriate</td></tr>
</table>

### Linting Style
* ESLint with Airbnb style guide. 

## Features

 ### Primary Features

 * Admin can create an employee user account. 
 * Admin/Employees can sign in. 
 * Employees can create and share gifs with other colleagues. 
 * Employees can write and/or share articles with colleagues on topics of interest to them.
 * Employees can edit their articles. 
 * Employees can delete their articles. 
 * Employees can delete their gifs post. 
 * Employees can comment on other colleagues' article post. 
 * Employees can comment on other colleagues' gif post. 
 * Employees can view all articles, showing the most recently posted articles first. 
 * Employees can view a specific article.

 ### Additional Features

 * Employees can view all articles that belong to a category (tag).
 * Employees can flag a comment, article and/or gif as inappropriate. 
 * Admin can delete a comment, article and/or gif flagged as inappropriate.

## Built With

* SERVER : Nodejs and Express

* STYLING : Material UI.

* FRONT-END : React 

* DATABASE : PostgreSQL

* Testing : Unit Testing : Mocha & Chai; Continuous Integration: Travis CI

## Author
*  [Ucheka chike](https://twitter.com/ucheka_wilson)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.
