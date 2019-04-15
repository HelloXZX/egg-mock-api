'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.mockApi.index);
  router.get('/test', controller.mockApi.index);
  router.get('/api/project/notice', controller.mockApi.notice);
  router.get('/api/activities', controller.mockApi.getActivities);
  router.post('/api/forms', controller.mockApi.forms);
  router.get('/api/tags', controller.mockApi.tags);
  router.get('/api/fake_list', controller.mockApi.getFakelist);
  router.post('/api/fake_list', controller.mockApi.postFakelist);
  router.get('/api/captcha', controller.mockApi.getFakeCaptcha);
  router.get('/api/fake_chart_data', controller.mockApi.getFakeChartData);
  router.get('/api/profile/advanced', controller.mockApi.getProfileAdvancedData);
  router.get('/api/profile/basic', controller.mockApi.getBasicProfile);
  router.get('/api/rule', controller.mockApi.getRule);
  router.post('/api/rule', controller.mockApi.postRule);
  router.get('/api/currentUser', controller.mockApi.getCurrentUser);
  router.get('/api/users', controller.mockApi.getUsers);
};
