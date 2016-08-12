;(function(){
angular.module("commColor", [])
    .component("quizComponent", {
        templateUrl: "app/quizform.html",
        controller: QuizController,
        controllerAs: "qc",
    })
 QuizController.$inject =["TestQuestions"]
function QuizController(TestQuestions) {
    const qc = this;
    qc.quiz = TestQuestions.questions();
    let answers = {
        b: 0,
        g: 0,
        r: 0,
        y: 0
    }

 }
 

}());