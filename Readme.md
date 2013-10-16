
# reduce

  reduce anything

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/reduce

## Example

```js
assert(3 == reduce({ a: 1, b: 2 }, sum, 0));
assert(3 == reduce([1, 2], sum, 0));
assert(198 == reduce('abc', sum, 0));
```

## License

  MIT
