# README
## _SoulDog_

## How to run locally
Before cloning, ensure that you have npm and node installed.

See demo at (it will take some time to load): https://souldog.herokuapp.com/

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

Location of test-sample.out is `/SoulDog/database/test-sample.out`
Location of test-sample.sql is `/SoulDog/database/test-sample.sql`

## The application provides the following functionalities: 

Creation of an account: users can create an account for themselves so that they may start using the application and its features. On a separate page before entering the application, they will be asked to choose a username and password for their account. 

Authentication of a user: thereafter, users can authenticate themselves so that they may access the application. This will be done on a separate page where users can enter their previously chosen username and password, and then the user will be redirected to the home page once the application verifies the user exists and has entered their information correctly.

Creation of a profile: users can create a profile once they have created an account. They will be able to indicate some personal information (name, email, etc.) along with other information (activity level, strength, etc.) that will help the application identify the right dog for them. This will be completed on a separate page within the application, which the user will be directed to upon first logging in. They can also go back and update this information at a later date, and the application will then provide the user with records on the main search page that match the new information entered. 

Searching for pets: users can go to the home page and click ‘search’, which prompts the application to produce a new page with records of dogs that match that user’s profile information. Afterwards, users will be able to select from some drop down menus to further refine their search results (dog breed, gender, etc.). 

Updating the pet favourite list: users can add dogs from the list of records the application displays to their favourites list. They can then access all the posts they have favourited in one location, on a separate page in the application. Once there, users can also choose to remove pets from the list, and the application will refresh the page and display the updated records.

Commenting under a post: users can interact with posts on the application by leaving a comment. Upon clicking on a post, a separate page will pop up where users can type in their comment and save it. The application will then update the post to include that user’s comment. 

Liking a post: users can also interact with posts by leaving a like. Upon clicking on a post, a separate page will pop up where users can click the like button. The application will then update the number of likes corresponding to that post. 

Creation and deletion of a post: users can create a post by going to a separate page in the application. Information can be included regarding the dog, and then the post can be saved and posted. The application will then update the list of all records and show that post in the main search page when it matches the search criteria entered. Once the dog has been adopted, the poster should be able to delete the post. By going to a separate page on the application that lists their posts, they can select the post they wish to delete. Then, the application will no longer show that post in search results to all users.