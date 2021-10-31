# dialects.io-ui


### how to build a react app with tailwind css
Thanks to https://www.sitepoint.com/react-tailwind-css-build-site/


    # setting up react and react css
    npx create-react-app app
    cd app
    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

    # setting up craco
    # We need CRACO here to override PostCSS configurations and add the tailwindcss plugin.
    # So, let’s first install it:
    npm install @craco/craco

    # update the package.json
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
    },

    # add craco.config.js in the root of the project
    module.exports = {
    style: {
        postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
        },
    },
    }

    # This configuration file adds the tailwindcss and autoprefixer plugins to postcss.
    # Now we’ll generate the configuration file for Tailwind CSS:

    npx tailwindcss init

    # update src/index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    # for route and switch
    yarn add react-router-dom

    # for axios
    yarn add axios

    # install fontAwesome!

    ```
    yarn add @fortawesome/fontawesome-svg-core
    yarn add @fortawesome/free-solid-svg-icons
    yarn add @fortawesome/react-fontawesome
    ```

    # add react spring for some animations
    yarn add react-spring




### how to run locally



### how dockerize and deploy

