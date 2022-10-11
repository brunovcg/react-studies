# Prettier

yarn add -D --exact prettier

add "format": "prettier --ignore-path .gitignore --write \"\*_/_.{ts,tsx,css,scss}\"",

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --ignore- .gitignore .",
    "format": "prettier --ignore-path .gitignore --write \"**/*.{ts,tsx,css,scss}\"",
    "coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='!src/**/*.{types,stories,constants,test,spec}.{js,jsx,ts,tsx}'"
  },

```

Touch .prettierrc.json

```json
{
  "semi": false,
  "singleQuote": true
}
```
