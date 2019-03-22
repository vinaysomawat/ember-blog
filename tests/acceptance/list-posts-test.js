import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { 
	click,
	currentURL,
	visit
} from '@ember/test-helpers';

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
  	await visit('/');
  	assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company.', async function (assert) {
  	await visit('/');
  	await click(".menu-about");
  	assert.equal(currentURL(), '/about', 'should navigate to about');
  });


});
