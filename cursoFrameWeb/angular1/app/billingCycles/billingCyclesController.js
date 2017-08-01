(function() {
    angular.module('primeiraApp').controller('billingCyclesCtrl', [
        '$http',
        'msgs',
        billingCyclesController
    ])

    function billingCyclesController($http, msgs) {
        const vm = this

        vm.create = function() {
            const url = "http://localhost:3003/api/billingCycles";
            $http.post(url, vm.billingCycles).then(function(response) {
                vm.billingCycles = {}
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function(data) {
                msgs.addError(data.errors)
            })
        }
    }
})()