/**
 * Created by aviad on 3/28/2016.
 */
angular.module('hackIdcApp')
  .directive("masonry", function () {
    var NGREPEAT_SOURCE_RE = '<!-- ngRepeat: ((.*) in ((.*?)( track by (.*))?)) -->';
    return {
      compile: function(element, attrs) {
        // auto add animation to brick element
        var animation = attrs.ngAnimate || "'masonry'";
        var $brick = element.children();
        $brick.attr("ng-animate", animation);

        // generate item selector (exclude leaving items)
        var type = $brick.prop('tagName');
        var itemSelector = type+":not([class$='-leave-active'])";

        return function (scope, element, attrs) {
          var options = angular.extend({
            itemSelector: itemSelector
          }, scope.$eval(attrs.masonry));

          // try to infer model from ngRepeat
          if (!options.model) {
            var ngRepeatMatch = element.html().match(NGREPEAT_SOURCE_RE);
            if (ngRepeatMatch) {
              options.model = ngRepeatMatch[4];
            }
          }

          setInterval(function(){
            element.masonry();
          },0);


          // initial animation
          element.addClass('masonry');

          // Wait inside directives to render
          setTimeout(function () {
            element.masonry(options);

            element.on("$destroy", function () {
              element.masonry('destroy')
            });

            element.on('click',function(){
              console.log(this);
              element.masonry();
            });

            if (options.model) {
              scope.$apply(function() {
                scope.$watchCollection(options.model, function (_new, _old) {
                  if(_new == _old) return;

                  // Wait inside directives to render
                  setTimeout(function () {
                    element.masonry("reload");
                  });
                });
              });
            }
          });
        };
      }
    };
  });
