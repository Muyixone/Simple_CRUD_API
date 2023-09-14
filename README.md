# # Simple_CRUD_API

Simple_CRUD_API is a Javascript built API, for performing basic CRUD operations.

### Technologies Used

The API is built using the following technologies

- ![Node][NodeJS]
- ![Express][Express.js]
- ![MongoDb][MongoDB]

## Getting Started

You need to have a working copy of this code in your local computer; to achieve this, you can fork/clone this repository.

### Prerequisites

To run the application, you must have node installed in your computer. [Download Node.js](https://nodejs.org/) and install.

### Installing

Once you have Node installed and a copy of this code in your local computer; navigate to the root directory of your code and open your terminal.
You need to install all code dependencies.
once you have installed the softwares above.\_

1. Clone the repo
   ```sh
   git clone git@github.com:Muyixone/Simple_CRUD_API.git
   ```
2. Navigate to the project directory
   ```sh
   cd Simple_CRUD_API
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set up the required enviroment variables

- `.env`
- Add the following environment variables

```js
MONGODB_URI = your_mongodb_uri;
```

## Running API tests

#### Create Person

&bull; Route: `/hng/api`

&bull; Method: POST

&bull; Body:

![Create Person!](./gifs/create_person.gif 'Create Person')

#### Get Person

&bull; Route: `/hng/api/user_id`

&bull; Method: GET

&bull; URL_Parameter:

![Get person](./gifs/get_person.gif 'Get Person')

#### Update Person

&bull; Route: `/hng/api/user_id`

&bull; Method: PATCH

&bull; URL_Parameter & Body:

![update person](./gifs/update_person.gif 'update Person')

#### Delete Person

&bull; Route: `/hng/api/user_id`

&bull; Method: DELETE

&bull; URL_Parameter:

![delete person](./gifs/delete_person.gif 'delete person')

## Deployment

You can host your application on any web hosting platform that supports Node.

<!-- CONTACT -->

## Contact

For your questions or inquiries, you can contact me

[![twitter][Twitter_shield]][Twitter_url]

Email: muyi.alarezomo@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Twitter_shield]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[Twitter_url]: https://twitter.com/Muyixone
