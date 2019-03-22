import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { 
	currentURL,
	visit
} from '@ember/test-helpers';

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
  await visit('/');
  assert.equal(currentURL(), '/home', 'should redirect automatically');
  });
});
