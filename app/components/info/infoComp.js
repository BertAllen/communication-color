;(function(){

    angular.module("commColor")
        .component("infoComponent", {
            templateUrl: "app/components/info/info.html",
            controller: InfoController,
            controllerAs: "ic",
            bindings: {
                which: "<"
            }
        });
    
    InfoController.$inject = ["QandAService"];
    function InfoController(QandAService) {
        const ic = this;
        ic.show = ic.which;
        ic.moreInfo = QandAService.getMoreInfo();
    }

}());