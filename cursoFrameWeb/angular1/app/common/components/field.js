(function() {
    angular.module('primeiraApp').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
        },
        controller: [
            'gridSystem',
            function(gridSystem) {
                this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
        <div class="col-xs-12 col-sm-4">
            <div class="form-group">
                <label for="name">Nome</label>
                <input id="name" class="form-control" placeholder="Informa o nome">
            </div>
        </div>        
        `
    })
})()