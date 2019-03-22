import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | writeforus', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:writeforus');
    assert.ok(route);
  });
});
