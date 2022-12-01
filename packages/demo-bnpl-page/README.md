# Feedback form

Simple customer feedback form built with [Gatsby](https://www.gatsbyjs.com/),
[Firebase](https://firebase.google.com/), and using
[VisX](https://airbnb.io/visx) for data visualisation

## Demo

[Live demo](https://feedback.alexmcgovern.com)

## Features

- Authentication via Firebase Auth
- Create & delete comments via Firestore
- Pagination for Firestore
- Feedback scores visualised with VisX

## What's left to improve & why

### Auth

- **No option to add display name to user profile:** Will need to implement a second screen after auth to add display name & other details to user profile. Omitted due to time constraints.

### UI

- **Nicer UI component for feedback modal:** Project uses a simple single select
  for "rating" field in dialog. Ideally would create something more bespoke, and
  nicer to use — e.g. slider.
- **Design system component improvements:** Project uses my own design system,
  which is still in it's early stages. Could use a lot more test coverage.

### Testing

- **Mock Firebase functions in test environment:** Currently only pagination
  state and component functionality is tested, while creating & updating
  Firestore docs is still uncovered. Ideally would mock Firebase using a similar
  approach as [here](https://www.npmjs.com/package/firestore-jest-mock).
- **Test Graph component:** Due to some async state updates, feedback graph is
  empty on initial render. This probably needs to be wrapped in `act(...)`, but
  due to time constraints, has been left untested.
- **Unit tests for Firestore security rules:** Omitted due to time constraints
- **E2E tests with Cypress:** Requires Firebase simulator, omitted due to time constraints.

### Bugs

- **Adding new comment does not scroll to top if not on page 1**
- **Flash of unstyled content on initial load:** This is probably something minor caused by how the design system stylesheet is loaded. Will be fixed soon, but omitted due to time constraints.

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

```bash
  git clone https://github.com/alex-mcgovern/alexmcgovern.com.git
```

Go to the monorepo root directory

```bash
  cd alexmcgovern.com
```

**Note:** Project is built with Node.js v18.12.1. If using nvm you can use the .nvmrc in the project root

```bash
  nvm use
```

Install dependencies with Lerna

```bash
  npx lerna bootstrap
```

Create a `.env.development` file in the project package directory, and populate it with required [Environment Variables](#environment-variables)

```bash
  touch packages/demo-feedback-form/.env.development
```

Start the Gatsby development server

```bash
  npm run develop:demo-feedback-form
```

## Running Tests

To run tests, run the following command

```bash
  npm run jest:demo-feedback-form
```

## Deployment

Deployment is handled by a simple Github actions workflow. It takes care of
these steps:

- **On new PRs against master:** Runs unit tests with Jest & React Testing
  Library
- **On new commits to master:** Builds and pushes to Cloudflare pages
