# Husky

npx husky-init && yarn

.husky > pre-commit

```txt
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint && yarn format
```
