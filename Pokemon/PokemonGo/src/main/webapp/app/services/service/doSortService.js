(function() {

    var DoSortService =  function(bookService)
    {
        // var vm = this;
        //
        // this.reverse =false;

        this.doSort = function()
        {
            this.sortby = 'Title';
            this.reverse= !this.reverse;
        };
    };

    angular.module('bookStore').service('doSortService', [DoSortService]);
}());