(function() {
    'use strict';
    angular
        .module('isaApp')
        .factory('Prijatelji', Prijatelji);

    Prijatelji.$inject = ['$resource', 'DateUtils'];

    function Prijatelji ($resource, DateUtils) {
        var resourceUrl =  'api/prijateljis/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.postalanZahtev = DateUtils.convertLocalDateFromServer(data.postalanZahtev);
                        data.prihvacenZahtev = DateUtils.convertLocalDateFromServer(data.prihvacenZahtev);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.postalanZahtev = DateUtils.convertLocalDateToServer(copy.postalanZahtev);
                    copy.prihvacenZahtev = DateUtils.convertLocalDateToServer(copy.prihvacenZahtev);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.postalanZahtev = DateUtils.convertLocalDateToServer(copy.postalanZahtev);
                    copy.prihvacenZahtev = DateUtils.convertLocalDateToServer(copy.prihvacenZahtev);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();
