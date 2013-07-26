app.filter('capitalize', function() {
  return function(input, scope) {
    var arr, i, str, _i, _len;
    if (input) {
      str = '';
      arr = input.split('_');
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        i = arr[_i];
        str += i.substring(0, 1).toUpperCase() + i.substring(1) + ' ';
      }
      str = str.substring(0, str.length - 1);
      return str;
    }
  };
});

app.filter('startFrom', function() {
  return function(input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

app.filter('fromNow', function() {
  return function(date) {
    return moment(date, 'MM-DD-YYYY').fromNow();
  };
});
