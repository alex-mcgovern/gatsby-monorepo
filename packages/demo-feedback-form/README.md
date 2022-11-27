
# Feedback form

Simple customer feedback form built with [Gatsby](https://www.gatsbyjs.com/), [Firebase](https://firebase.google.com/), and using [VisX](https://airbnb.io/visx) for data visualisation


## Demo

[Live demo](https://feedback.alexmcgovern.com)


## Features

- Authentication via Firebase Auth
- Create & delete comments via Firestore
- Pagination for Firestore
- Feedback scores visualised with VisX


## What's left to improve & why

### UI improvements

- **Nicer UI component for feedback modal:** Project uses a simple single select for "rating" field in dialog. Ideally would create something more bespoke, and nicer to use — e.g. slider.
- **Design system component improvements:** Project uses my own design system, which is still in it's early stages. Could use a lot more test coverage.

### Testing improvements

- **Mock Firebase functions in test environment:** Currently only pagination state and component functionality is tested, while creating & updating Firestore docs is still uncovered. Ideally would mock Firebase using a similar approach as [here](https://www.npmjs.com/package/firestore-jest-mock).
- **Test Graph component:** Due to some async state updates, feedback graph is empty on initial render. This probably needs to be wrapped in `act(...)`, but due to time constraints, has been left untested.





## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.(development|production)` file

Reach out to me on Keybase at `alex_mcgovern` for the required vars.

**Note:** These vars are exposed at runtime, and are [not secret](https://firebase.google.com/docs/projects/api-keys).

`GATSBY_FIREBASE_WEB_API_KEY`=<string>

`GATSBY_FIREBASE_AUTH_DOMAIN`=<string>

`GATSBY_FIREBASE_PROJECT_ID`=<string>

`GATSBY_FIREBASE_STORAGE_BUCKET`=<string>

`GATSBY_FIREBASE_MESSAGING_SENDER_ID`=<string>

`GATSBY_FIREBASE_APP_ID`=<string>

`GATSBY_FIREBASE_MEASUREMENT_ID`=<string>

`GATSBY_FIREBASE_DATABASE_URL`=<string>


## Run Locally


**Note:** The project is built as a package as part of a [Lerna](https://lerna.js.org/) monorepo.


Clone the monorepo project

```bash
  git clone https://github.com/alex-mcgovern/alexmcgovern.com.git
```

Go to the monorepo root directory

```bash
  cd alexmcgovern.com
```

Install dependencies with Lerna

```bash
  npm run bootstrap
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

Deployment is handled by a simple Github actions workflow. It takes care of these steps:
- **On new PRs against master:** Runs unit tests with Jest & React Testing Library
- **On new commits to master:** Builds and pushes to Cloudflare pages

