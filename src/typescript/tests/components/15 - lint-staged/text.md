# lint-staged

yarn add lind-staged

```json
 "lint-staged": {
    "*.{ts,tsx}": [
      "eslint"
    ],
    ".{ts,tsx,css,scss}": [
      "prettier --write"
    ]
  }
```

husky > precommit --

npm lint-staged
