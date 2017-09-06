(function() {

    var PokeSearcherController =  function() {
        var vm = this;

    };
    function init() {

        pokeService.getPokemon().then(function (results) {
            console.log("In book controller about to return data to the client with results " + results);

        }, function (error) {
            vm.error = true;
            vm.errorMessage = error;
        });



    init();

};

    angular.module('pokeApp').controller('pokeSearcherController', [PokeSearcherController]);
}());