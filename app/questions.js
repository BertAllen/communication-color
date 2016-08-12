; (function () {
    angular.module("commColor")
        .service("TestQuestions", function () {
            this.questions = function () {
                const questionsList = [
                    {
                        id: 1,
                        answer: "",
                        choices: [
                            {
                                ans: "Aggressive",
                                color: "R"
                            },
                            {
                                ans: "Easily Influenced",
                                color: "G"
                            },
                            {
                                ans: "Uncertain",
                                color: "B"
                            },
                            {
                                ans: "Center Of Attention",
                                color: "Y"
                            }]
                    },
                    {
                        id: 2,
                        answer: "",
                        choices: [
                            {
                                ans: "Easy On Others",
                                color: "G"
                            },
                            {
                                ans: "Organized",
                                color: "B"
                            },
                            {
                                ans: "Powerful In Action",
                                color: "R"
                            },
                            {
                                ans: "Good Mixer",
                                color: "Y"
                            }]
                    },
                    {
                        id: 3,
                        answer: "",
                        choices: [
                            {
                                ans: "Well-Disciplined",
                                color: "B"
                            },
                            {
                                ans: "Generous",
                                color: "G"
                            },
                            {
                                ans: "Lively & Gestures",
                                color: "Y"
                            },
                            {
                                ans: "Doesn't Give Up",
                                color: "R"
                            }]
                    },
                    {
                        id: 4,
                        answer: "",
                        choices: [
                            {
                                ans: "Cautious",
                                color: "B"
                            },
                            {
                                ans: "Determined",
                                color: "R"
                            },
                            {
                                ans: "Persuasive",
                                color: "Y"
                            },
                            {
                                ans: "Good Natured",
                                color: "G"
                            }]
                    },
                    {
                        id: 5,
                        answer: "",
                        choices: [
                            {
                                ans: "Restless",
                                color: "R"
                            },
                            {
                                ans: "Popular",
                                color: "Y"
                            },
                            {
                                ans: "Neighborly",
                                color: "G"
                            },
                            {
                                ans: "Likes Rules",
                                color: "B"
                            }]
                    },
                    {
                        id: 6,
                        answer: "",
                        choices: [
                            {
                                ans: "Talkative",
                                color: "Y"
                            },
                            {
                                ans: "Controlled",
                                color: "G"
                            },
                            {
                                ans: "Decisive",
                                color: "R"
                            },
                            {
                                ans: "Systematic",
                                color: "B"
                            }]
                    },
                    {
                        id: 7,
                        answer: "",
                        choices: [
                            {
                                ans: "Diplomatic",
                                color: "B"
                            },
                            {
                                ans: "Daring",
                                color: "R"
                            },
                            {
                                ans: "Satisfied",
                                color: "G"
                            },
                            {
                                ans: "Expressive",
                                color: "Y"
                            }]
                    },
                    {
                        id: 8,
                        answer: "",
                        choices: [
                            {
                                ans: "Contented",
                                color: "G"
                            },
                            {
                                ans: "Trusting",
                                color: "Y"
                            },
                            {
                                ans: "Peaceful",
                                color: "B"
                            },
                            {
                                ans: "Positive",
                                color: "R"
                            }]
                    },
                    {
                        id: 9,
                        answer: "",
                        choices: [
                            {
                                ans: "Follows Directions",
                                color: "B"
                            },
                            {
                                ans: "Bold",
                                color: "R"
                            },
                            {
                                ans: "Charming",
                                color: "Y"
                            },
                            {
                                ans: "Loyal",
                                color: "G"
                            }]
                    },
                    {
                        id: 10,
                        answer: "",
                        choices: [
                            {
                                ans: "Sticks To Decisions",
                                color: "R"
                            },
                            {
                                ans: "Likes New Ideas",
                                color: "Y"
                            },
                            {
                                ans: "Ready To Do Favors",
                                color: "B"
                            },
                            {
                                ans: "Cheerful",
                                color: "G"
                            }]
                    },
                    {
                        id: 11,
                        answer: "",
                        choices: [
                            {
                                ans: "Considerate",
                                color: "G"
                            },
                            {
                                ans: "Avoids Conflict",
                                color: "B"
                            },
                            {
                                ans: "Stubborn",
                                color: "R"
                            },
                            {
                                ans: "Amusing",
                                color: "Y"
                            }]
                    },
                    {
                        id: 12,
                        answer: "",
                        choices: [
                            {
                                ans: "Eager",
                                color: "R"
                            },
                            {
                                ans: "Willing",
                                color: "G"
                            },
                            {
                                ans: "Agreeable",
                                color: "B"
                            },
                            {
                                ans: "Funny & Jokes",
                                color: "Y"
                            }]
                    },
                    {
                        id: 13,
                        answer: "",
                        choices: [
                            {
                                ans: "Adaptable",
                                color: "B"
                            },
                            {
                                ans: "Likes To Disagree",
                                color: "R"
                            },
                            {
                                ans: "Concerned",
                                color: "G"
                            },
                            {
                                ans: "Emotional",
                                color: "Y"
                            }]
                    },
                    {
                        id: 14,
                        choices: [
                            {
                                ans: "Wants To Have Fun",
                                color: "Y"
                            },
                            {
                                ans: "Patient",
                                color: "G"
                            },
                            {
                                ans: "Soft-Spoken",
                                color: "B"
                            },
                            {
                                ans: "Independent",
                                color: "R"
                            }]
                    },
                    {
                        id: 15,
                        answer: "",
                        choices: [
                            {
                                ans: "Respected",
                                color: "Y"
                            },
                            {
                                ans: "Kind",
                                color: "G"
                            },
                            {
                                ans: "Non-Resisting",
                                color: "B"
                            },
                            {
                                ans: "Forceful",
                                color: "R"
                            }]
                    },
                    {
                        id: 16,
                        answer: "",
                        choices: [
                            {
                                ans: "Quiet",
                                color: "G"
                            },
                            {
                                ans: "Accurate",
                                color: "B"
                            },
                            {
                                ans: "Strong Opinions",
                                color: "R"
                            },
                            {
                                ans: "Friendly",
                                color: "Y"
                            }]
                    },
                    {
                        id: 17,
                        answer: "",
                        choices: [
                            {
                                ans: "Takes Risks",
                                color: "R"
                            },
                            {
                                ans: "Willing To Help",
                                color: "G"
                            },
                            {
                                ans: "Outspoken",
                                color: "Y"
                            },
                            {
                                ans: "Reserved",
                                color: "B"
                            }]
                    },
                    {
                        id: 18,
                        answer: "",
                        choices: [
                            {
                                ans: "Even-Tempered",
                                color: "G"
                            },
                            {
                                ans: "Precise",
                                color: "B"
                            },
                            {
                                ans: "On Edge",
                                color: "R"
                            },
                            {
                                ans: "Wordy",
                                color: "Y"
                            }]
                    },
                    {
                        id: 19,
                        answer: "",
                        choices: [
                            {
                                ans: "Brave",
                                color: "R"
                            },
                            {
                                ans: "Inspiring",
                                color: "Y"
                            },
                            {
                                ans: "Gives In",
                                color: "G"
                            },
                            {
                                ans: "Patient",
                                color: "B"
                            }]
                    },
                    {
                        id: 20,
                        answer: "",
                        choices: [
                            {
                                ans: "Supportive",
                                color: "G"
                            },
                            {
                                ans: "Perfectionist",
                                color: "B"
                            },
                            {
                                ans: "Unwilling To Give In",
                                color: "R"
                            },
                            {
                                ans: "Playful",
                                color: "Y"
                            }]
                    },
                    {
                        id: 21,
                        answer: "",
                        choices: [
                            {
                                ans: "Convincing",
                                color: "Y"
                            },
                            {
                                ans: "Gentle",
                                color: "G"
                            },
                            {
                                ans: "Self-Reliant",
                                color: "B"
                            },
                            {
                                ans: "Original",
                                color: "R"
                            }]
                    },
                    {
                        id: 22,
                        answer: "",
                        choices: [
                            {
                                ans: "Confident",
                                color: "Y"
                            },
                            {
                                ans: "Sympathetic",
                                color: "G"
                            },
                            {
                                ans: "Assertive",
                                color: "R"
                            },
                            {
                                ans: "Likes Others Opinions",
                                color: "B"
                            }]
                    },
                    {
                        id: 23,
                        answer: "",
                        choices: [
                            {
                                ans: "Competitive",
                                color: "R"
                            },
                            {
                                ans: "Joyful",
                                color: "Y"
                            },
                            {
                                ans: "Considerate",
                                color: "G"
                            },
                            {
                                ans: "In Agreement",
                                color: "B"
                            }]
                    },
                    {
                        id: 24,
                        answer: "",
                        choices: [
                            {
                                ans: "Respectful",
                                color: "B"
                            },
                            {
                                ans: "Will Try New Ideas",
                                color: "R"
                            },
                            {
                                ans: "Optimistic",
                                color: "Y"
                            },
                            {
                                ans: "Wants To Please",
                                color: "G"
                            }]
                    }
                ]
                return questionsList;
            }
        })
} ());