'use strict';
angular.module('ds.temperatures')
    .factory('TemperaturesSvc', ['TemperaturesREST',
        function(TemperaturesREST){
            return {
                getProducts: function () {
                    TemperaturesREST.Temperature.all('products');
                }
            };
        }]);