import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('home');
  this.route('dsa', function() {
    this.route('stacks');
    this.route('queues');
    this.route('linkedlists');
    this.route('binarytree');
    this.route('binarysearchtree');
    this.route('heap');
    this.route('hashing');
    this.route('graph');
  });
  this.route('c');
  this.route('c++');
  this.route('python');
  this.route('java');
  this.route('javascript');
  this.route('programming');
  this.route('android');
  this.route('webdev');
  this.route('machinelearning');
  this.route('datascience');
  this.route('research');
  this.route('interview');
  this.route('writeforus');
});

export default Router;
