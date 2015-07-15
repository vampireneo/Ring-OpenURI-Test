angular.module('ringApp', [])
  .controller('MathsController', function() {
    var mathsGenerator = this;
    mathsGenerator.X = 1;
    mathsGenerator.Y = 2;
    mathsGenerator.AnsLeft = 2;
    mathsGenerator.AnsRight = 3;

    mathsGenerator.random = function() {
      mathsGenerator.X = Math.floor((Math.random() * 10));
      mathsGenerator.Y = Math.floor((Math.random() * 10));
      mathsGenerator.AnsLeft = mathsGenerator.X + mathsGenerator.Y;
      mathsGenerator.AnsRight = mathsGenerator.AnsLeft;
      if (Math.random() > 0.5)
        mathsGenerator.AnsLeft = Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10));
      else
        mathsGenerator.AnsRight = Math.floor((Math.random() * 10)) + Math.floor((Math.random() * 10));
    };
  });
