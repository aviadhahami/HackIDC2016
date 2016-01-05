'use strict';

describe('Directive: navScroll', function () {

  // load the directive's module
  beforeEach(module('hackIdcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<nav-scroll></nav-scroll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navScroll directive');
  }));
});