# README
## _SoulDog_

## How to run locally
Before cloning, ensure that you have npm and node installed.

Upon cloning the repository from [github](https://github.com/aarsh2000/SoulDog), run `npm install` to get all the dependecies.
To start the app run ```npm start``` and it should begin listening at http://localhost:3000
```
git clone https://github.com/aarsh2000/SoulDog.git
npm install
npm start
```

## How to create and load a sample database
There is already preloaded data in our `./database/db.sqlite3`.
The data itself was preloaded from `./database/seeds/*`
The schema outline/migrations are defined within `./database/migrations/*`

To run migrations we must be within the root directory and run `npx knex migrate:latest `

To run seeds and populate the database we run `npx knex seed:run`
