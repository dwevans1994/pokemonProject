(function() {

    var PokeService =  function(sorted) {

        this.getBooks = function()
        {
            return sorted.getBooks();
        };
    };

    angular.module('pokeApp').service('pokeService', ['sorted', PokeService]);
}());