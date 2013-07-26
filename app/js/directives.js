app.directive('layout', function() {
  var def;
  def = {
    restrict: 'EA',
    replace: true,
    template: 'app/layouts/default.html',
    compile: function(context, attr) {
      $('#view').html();
      return console.log("compile", a, b);
    },
    link: function(scope, element, attr) {
      return console.log("link", scope, element, attr);
    }
  };
  return def;
});
