# SpaceX Mission Launch Details App

This app provides an User Interface for SpaceX Mission Launches. 
It allows the user to see all SpaceX Missions and the user can filter the missions by Year, Launch Success and Landing Success.
The App is built on React with a custom SSR server for Production.

## Instructions
To run the Dev server, run `npm run dev` on your CLI. 
The Dev server relies on a static data for its first mount, therefore we have taken the initial props from an API call to our SpaceX service.

To run the Production server, run `npm start` on your CLI.
The react app is first built based on production configuration(`react-scripts build`) and then we start our server.
If a port is not specified, it will be opened by default on port 3300.

## Approach
The approach to build the app was based on minimal use of third-party libraries, for eg., usage of Web APIs to handle client-side url changes instead of using a third-party package like `react-router-dom`. Since the app doesn't have any conditional rendering requirements, dynamic imports were not used, thus also removing the requirement for adding CSS Modules for code-optimization. Pure CSS styling was used, in order to generate responsive design.
The SSR mode was created only for production deployments with a custom server, while the dev mode would still use CRA's own webpack-dev-server.

## Folder Structure
`src` - Holds Client side js files (Similar to CRA).
`server` - Holds custom server for SSR deployments.
`.env` - For setting environment values.
`src/actions` - For keeping all Reducer Actions and their constants like action types.
`src/components` - For keeping all React components.
`src/constants` - For keeping any hard-coded app constants.
`src/reducers` - For keeping all reducers of the app.
`src/services` - For keeping all API services used by the app.
`src/store` - For keeping Redux store configuration file.
`src/utils` - For keeping any utility files for the app.