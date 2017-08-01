(function() {
    angular.module('primeiraApp').controller('billingCyclesCtrl', [
        '$http',
        'msgs',
        'tabs',
        billingCyclesController
    ])

    function billingCyclesController($http, msgs, tabs) {
        const vm = this
        const url = "http://localhost:3003/api/billingCycles"

        vm.refresh = function() {

            $http.get(url).then(function(response) {

                vm.billingCycle = {}
                vm.billingCycles = response.data
                tabs.show(vm, { tabList: true, tabCreate: true })
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

        vm.showTabUpdate = function(billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = function(billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabDelete: true })
        }
        vm.refresh()
    }
})()