# Eslint

yarn add -D eslint-plugin-jest-dom

Add: "plugin:jest-dom/recommended"

Add some rules to jest to ESLINT to look form

```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "plugin:jest-dom/recommended"
    ]
```

Add on package.json "lint": "eslint --ignore- .gitignore .",

```json
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --ignore- .gitignore .",
    "coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='!src/**/*.{types,stories,constants,test,spec}.{js,jsx,ts,tsx}'"
  },

```
