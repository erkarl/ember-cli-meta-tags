export function initialize() {
  // ember 1.13 backwards compatibility
  const application = arguments[1] || arguments[0];
  application.inject('service:head-tags', 'router', 'router:main');
}

export default {
  name: 'ember-cli-page-title-head-tags',
  initialize: initialize
};
