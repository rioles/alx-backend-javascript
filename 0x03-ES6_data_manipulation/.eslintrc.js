module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb","prettier"],
    "plugins": ["prettier"],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars":"warn"
    }
}
