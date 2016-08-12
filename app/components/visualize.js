;(function(){

    angular.module("commColor")
        .component("graphComponent", {
        templateUrl: "app/components/graph.html",
        controller: GraphController,
        controllerAs: "gc",
        bindings: {
            info: "="
        }
    });

    function GraphController() {
        const gc = this;
        gc.percent = {
            b: gc.info.B / 24,
            g: gc.info.G / 24,
            r: gc.info.R / 24,
            y: gc.info.Y/24
        }
    }

}());