# ember-shoebox-decorator

A decorator for the Ember FastBoot shoebox.

Puts the returned value from the model hooks into the shoebox and
fetches the data on the initial transition.

Works with any route model hook (`beforeModel`, `model` and `afterModel`).

NOTE: Currently not working with Ember Data.

## Installation

```bash
ember install ember-shoebox-decorator
```

## Usage

```javascript
import { shoeboxModel } from 'ember-shoebox-decorator';
import fetch from 'ember-fetch';

export default Ember.Route.extend({
  @shoeboxModel
  model() {
    return fetch('/api/v1/posts').then(res => res.json());
  },
});
```

## License

This project is licensed under the [MIT License](LICENSE.md).
