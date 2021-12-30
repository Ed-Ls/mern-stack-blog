# The MERN stack Blog by Eden

**Here is my MERN stack Blog (Node.js + Express, MongoDB, React) !** 😁

It's a complete blog with its own API. You can register and login to post your own blog posts. You can filter posts by categories or users, edit or delete your own post, and update your profile settings (profil picture, username, password).

## How to run it

Install node modules on API side and run the server :

`cd api`
`npm install`
`npm start`

Configure your **.env** file with a valid MongoDB connexion string (see .env_example for more info)

On another terminal, do the same for the client side :

`cd client`
`npm install`
`npm start`

Visit your _localhost:3000_

## Built with

- **Frontend** : Html, CSS, ReactJS with React Context & [Axios](https://github.com/axios/axios) for API calls.
- **Backend** : Node.js, [Express](https://expressjs.com/fr/), [Multer](https://www.npmjs.com/package/multer) for files uploading and [Bcrypt](https://www.npmjs.com/package/bcrypt) to hash passwords.

## License

This website was made by me, please credit **©EdCh-Lo** if using it.
