storeProducts.provider("avatar", function(){
  this.$get = function(){
    return {
      generate: function(input){
        return "https://api.adorable.io/avatars/90/" + input;
      }
    };
  }
});
