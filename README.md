# retrieve [![Circle CI][circleci-badge]][circleci-link]

Retrieve a property at a specified path.

## Installation

Browser:

```sh
component install ndhoule/retrieve
```

Node:

```sh
$ npm install retrieve
```

## API

### `retrieve(str : string, obj : Object) => *`

Retrieve a property at a specified, dot-delimited path.

```javascript
var person = {
  name: 'Bob Loblaw',
  address: {
    coordinates: {
      x: 10,
      y: 20
    }
  }
};

retrieve('address.coordinates.y', person);
//=> 20
```

### `retrieve.on(delimiter : string, str : string, obj : Object) => *`

Retrieve a property at a specified path and provide a delimiter for the lookup string.

```javascript
var person = {
  name: 'Bob Loblaw',
  address: {
    coordinates: {
      x: 10,
      y: 20
    }
  }
};

retrieve.on('/', 'address/coordinates/x', person);
//=> 10
```

## License

Released under the [MIT license](LICENSE.md).

[circleci-link]: https://circleci.com/gh/ndhoule/retrieve
[circleci-badge]: https://circleci.com/gh/ndhoule/retrieve.svg?style=svg&circle-token=e363b6aad1d9f291773c0a73066a2162f0459462
