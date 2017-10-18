Express Handlebars Boilerplate
========

> Boilerplate for server-side rendering using Handlebars and Express when you need a simple HTML/CSS page

## Create environment variable
```
cp .env.example .env
```

## How to build:

1. Install Node
2. Install NPM
3. Install Yarn

To install packages

```
yarn install
```

## To build & start webservice

```
npm start
```

OR

```
node app.js
```

## (Default settings) Available URLs:

Basic ping request:
```
http://localhost:3000/ping
```

Basic handlebars templating example:
```
http://localhost:3000/home
```

Basic handlebars templating with partials example:
```
http://localhost:3000/homeWithPartials
```

An example with calling API to get data for the template:
```
http://localhost:3000/users/anvk/repos?token=SOME-KEY-HERE
```

## To run tests

```
npm test
```

## License

MIT license;
