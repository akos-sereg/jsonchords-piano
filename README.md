# jsonchords-piano

Source codes of https://www.jsonchords.com

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

| Action           | Command              |
| ---------------- | -------------------- |
| Start            | `npm run start`      |
| Production Build | `npm run build`      |
| ESLint           | `npm run eslint`     |
| ESLint Fix       | `npm run eslint-fix` |
| Prettier         | `npm run format`     |

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
- ESLint
- Prettier

### User Interface

- Bootstrap 3
- Toastr notifications
