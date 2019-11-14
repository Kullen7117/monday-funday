// MY_MEM is an env variable we are making up just for the sake of testing env var out
// this can be tested using MY_MEM=Arrays node enviroment_variables.js
console.log('I remember ' + process.env.MY_MEM)

// I wont specificly MY_FAV intentionally so I can see the deafult being use
const my_favorite = process.env.MY_FAV || 'filter function' ;
console.log('I really like the ' + my_favorite)

const db_host = process.env.DB_HOST || 'localhost';
console.log('Using database host: ' + db_host)