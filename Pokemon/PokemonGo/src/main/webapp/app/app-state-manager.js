"use strict";

(function () {

    angular.module('pokeApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/pokemon");

        $stateProvider.state("PokeBattler ", {
            url: "/pokebattler",
            templateUrl: "app/feature/pokebattler/pokebattler.html"
        }).state("PokeSearch ", {
                url: "/pokeSearcher",
                templateUrl: "app/feature/pokesearcher/pokesearcher.html"
        }).state("PokeBox ", {
            url: "/pokebox",
            templateUrl: "app/feature/pokebox/pokebox.html"
        })
    });
}());