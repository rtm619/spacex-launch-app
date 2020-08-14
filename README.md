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