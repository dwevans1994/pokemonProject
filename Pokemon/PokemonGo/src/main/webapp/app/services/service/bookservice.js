(function() {

    var BookService =  function(sorted) {
        
    	this.getBooks = function()
        {
            return sorted.getBooks();
        };
    };

    angular.module('bookStore').service('bookService', ['sorted', BookService]);
}());