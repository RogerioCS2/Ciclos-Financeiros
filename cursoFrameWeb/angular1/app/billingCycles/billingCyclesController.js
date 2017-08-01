(function() {
    angular.module('primeiraApp').controller('billingCyclesCtrl', [
        '$http',
        'msgs',
        billingCyclesController
    ])

    function billingCyclesController($http, msgs) {
        const vm = this
        const url = "http://localhost:3003/api/billingCycles"

        vm.refresh = function() {

            $http.get(url).then(function(response) {

                vm.billingCycle = {}
                vm.billingCycles = response.data
            })
        }

        vm.create = function() {
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }
        vm.refresh()
    }
})()