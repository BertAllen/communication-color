; (function () {

    angular.module("commColor")
        .component("graphComponent", {
            templateUrl: "app/components/graph/graph.html",
            controller: GraphController,
            controllerAs: "gc",
            bindings: {
                info: "<"
            }
        });

    GraphController.$inject = ["QandAService"]

    function GraphController(QandAService) {
        const gc = this;
        gc.show = {
            b: false,
            g: false,
            r: false,
            y: false,
            none: true
        }
        // debugger;
        gc.info = QandAService.getAnswers();
        gc.percent = QandAService.getPercentage();
    }

} ());