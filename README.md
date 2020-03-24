

## Available Scripts

In the project directory, you can run:

### `npm start`

## React-scripts

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

## React-scripts

Unit tests:
1) Calculator Component - render test (Snapshot, due to the lack of any pure functionality)
2) ValueBox Component - render test (Snapshot, due to the lack of any pure functionality)
3) ActionButton Component - render test (Snapshot, due to the lack of any pure functionality)
4) calculatorModel - execution test (Pure function)

Launches the test runner in the interactive watch mode.<br />

### `npm run teste2e`

## Cypress

Runs end-to-end tests with Cypress

E2E tests suits:
1) Initialization test
2) Input test
3) Execution test

### `npm run build`

## Webpack + Babel 

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />


### `docker-compose up`

Build intermediate container from Node to build the application, then build another container from Nginx to host it.

Automatically hosts to localhost:8080
