# path [![Circle CI][circleci-badge]][circleci-link]

Retrieve a property at a specified path.

## Installation

Browser:

```sh
component install ndhoule/path
```

Node:

```sh
$ npm install path
```

## API

### path(str : string, obj : Object) => *

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

path('address.coordinates.y', person);
//=> 20
```

### path.on(delimiter : string, str : string, obj : Object) => *

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

path.on('/', 'address/coordinates/x', person);
//=> 10
```

## License

Released under the [MIT license](LICENSE.md).

[circleci-link]: https://circleci.com/gh/ndhoule/path
[circleci-badge]: https://circleci.com/gh/ndhoule/path.svg?style=svg&circle-token=
