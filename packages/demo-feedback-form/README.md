# Feedback form

Simple customer feedback form built with [Gatsby](https://www.gatsbyjs.com/),
[Firebase](https://firebase.google.com/), and using
[VisX](https://airbnb.io/visx) for data visualisation

## Demo

[Live demo](https://feedback.alexmcgovern.com)

## Features

- Authentication via Firebase Auth
- Create & delete comments via Firestore
- Custom Pagination hook for Firestore
- Feedback scores visualised with VisX
- Firebase emulator for local development
- Build/test/deploy CI workflow with Github Actions

## ToDo

### Auth

- [x] ~Add display name to user profile~


### UI

- [x] ~Create `Slider`, use it in feedback form~

### Testing

- [x] ~Cypress~
- [x] ~Setup Firebase emulator for Cypress~ 
- [ ] Fix types in `cypress` folder
- [ ] Test VisX graph component
- [ ] Unit tests for Firestore security rules (partially covered via Cypress)

### Bugs

- [x] ~Flash of unstyled content on initial load~
- [x] ~Adding new comment does not scroll to top if not on page 1~


## Environment Variables

To run this project, you will need to add the following environment variables to
your `.env.(development|production)` file

Reach out to me on Keybase at `alex_mcgovern` for the required vars.

**Note:** These vars are exposed at runtime, and are
[not secret](https://firebase.google.com/docs/projects/api-keys).

```
GATSBY_FIREBASE_WEB_API_KEY=
GATSBY_FIREBASE_AUTH_DOMAIN=
GATSBY_FIREBASE_PROJECT_ID=
GATSBY_FIREBASE_STORAGE_BUCKET=
GATSBY_FIREBASE_MESSAGING_SENDER_ID=
GATSBY_FIREBASE_APP_ID=
GATSBY_FIREBASE_MEASUREMENT_ID=
GATSBY_FIREBASE_DATABASE_URL=

```

## Run Locally

**Note:** The project is built as a package as part of a
[Lerna](https://lerna.js.org/) monorepo.

Clone the monorepo project

```zsh
  git clone https://github.com/alex-mcgovern/alexmcgovern.com.git
```

Go to the monorepo root directory

```zsh
  cd alexmcgovern.com
```

**Note:** Project is built with Node.js v18. If using nvm you can use the .nvmrc in the project root

```zsh
  nvm use
```

Install dependencies with Lerna

```zsh
  npx lerna bootstrap
```

Create a `.env.development` file at `packages/demo-feedback-form`, and populate it with required [Environment Variables](#environment-variables)

```zsh
  touch packages/demo-feedback-form/.env.development
```

### Run locally against Firebase emulator (preferred)

Start the Firebase Emulator by running:

```zsh
  npm run firebase:emulators
```

Then (in another terminal) start the development server, instructing the app to use the Firebase Emulators like so:

```zsh
  npm run demo-feedback:develop:emulate-firebase
```

### Run locally against production Firebase instance

To run the project with production Auth & Firestore data, start the Gatsby development server like so:

```zsh
  npm run demo-feedback:develop
```

## Running Tests

To run unit tests with Jest, run:

```zsh
  npm run demo-feedback:jest
```

To run E2E tests with Cypress & the Firebase emulator, run:

```zsh
  npm run demo-feedback:cy:run:emulate-firebase
```

You can also start the Firebase emulator seperately and open Cypress UI:


```zsh
  npm run firebase:emulators
```
```zsh
  npm run demo-feedback:cy:open:emulate-firebase
```

## Deployment

Deployment is handled by a simple Github actions workflow. It takes care of
these steps:

- **On new PRs against master:** Runs unit tests with Jest & React Testing
  Library
- **On new commits to master:** Builds and pushes to Cloudflare pages
