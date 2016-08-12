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
        // debugger;
        gc.info = QandAService.getAnswers();
        gc.percent = QandAService.getPercentage();
    }

} ());