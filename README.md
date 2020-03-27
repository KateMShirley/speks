# covey

## System requirements

- **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

- **Yarn:** Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) to make sure you're using the latest version.


## Local dev

- **Clone this theme**
- **Save .env file provided by developer into project root**
- **Run "npm install" from terminal**
- **Run "yarn build" from terminal**
- **Run "yarn start" from terminal to start local dev**
- **To deploy run "yarn deploy" from terminal**
- **General docs for [Shopify Slate](https://github.com/Shopify/slate/wiki/Slate-themes)**

## Project Structure

- Parent Theme layout in src/layout/theme.liquid
- All page templates will be rendered within theme.liquid and are located in src/templates
- Templates make use of theme "sections" and "snippets" located in src/templates and src/snippets respectively
- Scss styles are in assets/styles. When built for production they are compiled into theme.css
- Scripts are located in assets/scripts, which is compiled into theme.js for production. Some scripts are inline within the sections or snippets.
