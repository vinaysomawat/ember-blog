import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | datascience', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:datascience');
    assert.ok(route);
  });
});
