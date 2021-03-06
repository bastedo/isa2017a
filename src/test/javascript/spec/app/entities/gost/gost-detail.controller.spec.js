'use strict';

describe('Controller Tests', function() {

    describe('Gost Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockGost, MockUser, MockRezervacija, MockZahtevZaPrijateljstvo, MockPoziv;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockGost = jasmine.createSpy('MockGost');
            MockUser = jasmine.createSpy('MockUser');
            MockRezervacija = jasmine.createSpy('MockRezervacija');
            MockZahtevZaPrijateljstvo = jasmine.createSpy('MockZahtevZaPrijateljstvo');
            MockPoziv = jasmine.createSpy('MockPoziv');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Gost': MockGost,
                'User': MockUser,
                'Rezervacija': MockRezervacija,
                'ZahtevZaPrijateljstvo': MockZahtevZaPrijateljstvo,
                'Poziv': MockPoziv
            };
            createController = function() {
                $injector.get('$controller')("GostDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'isaApp:gostUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
