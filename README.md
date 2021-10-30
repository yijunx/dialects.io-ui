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




### how to run locally



### how dockerize and deploy

