# react-redux-boilerplate

This project is a working standalone front-end app aiming to demonstrate best javascript practices and common usage of React / Redux.

## Stack

| Package    | Version | Date of Release      |
| ---------- | ------- | -------------------- |
| Node       | 20.9.0  | 24th of October 2023 |
| React      | 18.2.0  | 14th of June 2022    |
| Redux      | 4.2.1   | 28th of Jan 2023     |
| Typescript | 5.0.4   | 7th of April 2023    |

## Usage

### Pre-requisites

```
$ nvm install 20.9.0
$ nvm use 20.9.0
```

### Start

```
$ npm install
$ npm start
```

Then open http://localhost:3000/

Any modification in the code will trigger a rebuild cycle, and the browser will refresh the app automatically.

### Production Build

For production build, run the following command:

```
$ npm run build
```

This will produce artifacts under `build`

### Commands

| Action                         | Command                |
| ------------------------------ | ---------------------- |
| Start                          | `npm run start`        |
| Production Build               | `npm run build`        |
| ESLint                         | `npm run eslint`       |
| ESLint Fix                     | `npm run eslint-fix`   |
| Prettier                       | `npm run format`       |
| Unit Tests                     | `npm run test`         |
| E2E Tests for Humans           | `npm run cypress:open` |
| E2E Tests for Machines (CI/CD) | `npm run cypress:run`  |

## Features

### Language

- ES6
- SCSS
- Typescript

### Development tech-stack

- Hot Reload
- Webpack
- Sourcemap
- Emotion
- Jest (with coverage reporting on typescript files)
- Cypress (E2E)
- ESLint
- Prettier

### User Interface

- Bootstrap 3
- Toastr notifications

### TODOs

- Introduce react-error-boundary

## Testing

Run the following command

```
$ npm run test
```

It generates a coverage report as well. You can set coverage expectations in `config/jest.config.js`

## E2E Testing

Make sure that the application is running (`npm start`), and you are using `InMemory` backend (`app/services/ConfigService.ts`), as E2E tests
are running against your local instance.

Then run the following command

```
$ npm run cypress:open
```

For headless run (eg. on CI/CD, like Jenkins) you can execute `npm run cypress:run`

For more information, read `cypress/Readme.md`
