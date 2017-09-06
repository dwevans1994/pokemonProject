"use strict";

(function () {

    angular.module("pokedex").service("pokeDal", ["dalp", PokeDal]);

    function PokeDal (dalp) {

        this.getPokemon = function () {
            return dalp.http.GET("http://pokeapi.co/api/v2/pokemon/1/");
        };

        // this.savePokemon = function (storePokemon) {
        //     return dalp.http.POST("http://pokeapi.co/api/v2/pokemon/1/", storePokemon);
        // };
        //
        // this.updatePokemon = function (pokemonUpdate) {
        //     return dalp.http.PUT("http://pokeapi.co/api/v2/pokemon/1/", pokemonUpdate);
        // };
        //
        // this.deletePokemon = function (pokemonDeleted) {
        //     return dalp.http.DELETE("http://pokeapi.co/api/v2/pokemon/1/", pokemonDeleted);
        // };

    }
}());
