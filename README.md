
  ##  E-commerce Back End

   

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
  
   

  ## [Description](#table-of-contents)
     Express.js API and configure it to use Sequelize to interact with a MySQL database.

  ## [User Story](#table-of-contents)
    AS A manager at an internet retail company
    I WANT a back end for my e-commerce website that uses the latest technologies
    SO THAT my company can compete with other e-commerce companies
        
  ## [Acceptance Criteria](#table-of-contents)
    GIVEN a functional Express.js API
    WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
    THEN I am able to connect to a database using Sequelize
    WHEN I enter schema and seed commands
    THEN a development database is created and is seeded with test data
    WHEN I enter the command to invoke the application
    THEN my server is started and the Sequelize models are synced to the MySQL database
    WHEN I open API GET routes in Insomnia Core for categories, products, or tags
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    THEN I am able to successfully create, update, and delete data in my database

  ## [Installation](#table-of-contents)
    * 1. Clone the repo
    * 2. Run npm i to install all npm packages.
    * Note: you must have an instance of sql runinng in my case a used docker

  ## [Usage](#table-of-contents)
    * 1. npm run seeds/index.js
    * note: this should fill your data base with registers.
    * 2. npm run start to run the app in the local host

  ## [Contributing](#table-of-contents)
    * no

  ## [Tests](#table-of-contents)
    * With insomnia or postman you should be able to run any of the routes
  
  ## [Contact](#table-of-contents)
    - [GitHub: jorgebesnierb](https://github.com/jorgebesnierb)
    - [Email: jorgebesnierb@outlook.com](mailto:jorgebesnierb@outlook.com)
