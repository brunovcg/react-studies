# Manual Queries

It is possible to use DOM selectors to query elements using but that is not recomended since that atributes cant be seing by user.

e.g.

const {container } = render( <MyComponent/> )
const foo = container.querySelector('[data-foo="bar"]')
