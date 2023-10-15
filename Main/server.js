const path = require('path'); //
const express = require('express'); //  Building the web server
const session = require('express-session'); // Who is logged in
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers'); // Anything that is going to be extra

// An instance is created => "in an instance" => for programming it's the realization of a class or object, when we invoke the express function -> stored into app variable
// When we tapping 'app' it represents us getting the web application i.e. the instance of an app - Turned into an object

const sequelize = require('./config/connection'); // Library for referring the database
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Connects sequelize to sessions

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers }); // Connects front end with helpers (functions)

// session creation
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); // Where we are connecting the engine

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
