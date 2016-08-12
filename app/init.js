; (function () {
    angular.module("commColor", [])
        .component("quizComponent", {
            templateUrl: "app/quizform.html",
            controller: QuizController,
            controllerAs: "qc",
        })
    QuizController.$inject = ["TestQuestions"]
    function QuizController(TestQuestions) {
        const qc = this;
        qc.quiz = TestQuestions.questions();
        qc.answers = {
            B: 0,
            G: 0,
            R: 0,
            Y: 0
        }

        qc.quizTally = function (qz) {
            for (let i = 0; i < qz.length; i++) {
                let block =qz[i]
                qc.answers[block.answer]++;
            }
            console.log(qc.answers)
        }

    }


} ());