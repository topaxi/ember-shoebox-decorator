# ember-shoebox-decorator

A decorator for the Ember FastBoot shoebox.

Puts the returned value from the model hooks into the shoebox and
fetches the data on the initial transition.

Works with any route model hook (`beforeModel`, `model` and `afterModel`).

NOTE: Currently not working with Ember Data.

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

## Installation

* `ember install ember-shoebox-decorator`
* `yarn add --dev babel-plugin-transform-decorators-legacy`
* Add `babel-plugin-transform-decorators-legacy` to the babel plugins in `ember-cli-build.js`.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
