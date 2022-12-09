require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');
const infoRouter = require('./src/routes/info.router');

const app = express();
app.use(express.json());

const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;

// SERVER'S SETTINGS
app.set('cookieName', COOKIE_NAME);

// APP'S MIDDLEWARES
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   }),
// );
app.use(express.json());
app.use(
  session({
    name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    },
  }),
);

const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use((req, res, next) => { console.log(req.body); next(); });

app.use(cors(corsOptions));
app.options('*', cors());
// APP'S ROUTES
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/info', infoRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен на порте', PORT);
});
