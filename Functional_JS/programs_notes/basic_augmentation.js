//namespace
var IIFE = function() {
return {
number: 1,
vault: 7,
};
}();


//augment IIFE namespace
IIFE = function(basicAugmentation){

  basicAugmentation.location = "Switzerland";
  return basicAugmentation;

}(IIFE);

IIFE;
