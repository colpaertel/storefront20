'use strict';
angular.module('ds.temperatures')
    .factory('TemperaturesREST', ['Restangular', 'SiteConfigSvc', function(Restangular, siteConfig){
        return {
            /** Endpoint for wishlist.*/
            Temperature: Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.setBaseUrl(siteConfig.apis.temperatureProducts.baseUrl);
            })
        };

    }]);