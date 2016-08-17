; (function () {
    angular.module("commColor")
        .service("QandAService", function () {
            let answers = {
                B: 0,
                G: 0,
                R: 0,
                Y: 0
            }
            let percent = {
                b: 0,
                g: 0,
                r: 0,
                x: 0,
                y: 0
            }

            this.setAnswers = function (ans) {
                answers = ans
                percent.x = Math.round(ans[''] * 4.1666);
                percent.b = Math.round(ans.B * 4.1666);
                percent.g = Math.round(ans.G * 4.1666);
                percent.r = Math.round(ans.R * 4.1666);
                percent.y = Math.round(ans.Y * 4.1666);
            }

            this.getAnswers = function () {
                return answers;
            }

            this.getPercentage = function () {
                return percent;
            }

            this.getMoreInfo = function () {
                return moreInfo;
            }

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

            const moreInfo = [
                {
                    color: "Blue",
                    alias: "b",
                    info: {
                        "At Work": [
                            "Business-like", "No-nonsense attitude", "Not very trusting of new acquaintances", "Very precise and task oriented",
                            "Know the rules and prefer developed policies", "Hard worker and very conscientious", "Tend to perfectionism",
                            "Prefer doing the job right over meeting deadlines"
                        ],
                        "Most Effective": [
                            "Doing tasks that call for accuracy and precision", "Effective at maintaining high standards",
                            "Making decisions based on critical analysis", "Working on Projects that give visible results"
                        ],
                        "Least Effective": [
                            "Rushed to make sudden changes", "Making quick decisions", "Don't like taking risks"
                        ],
                        "How To Improve": [
                            "By being more tolerant and less critical of others", "Willing to take more risk", "More confidence in their own judgment"
                        ]
                    }
                },//end of Blue info & object
                {
                    color: "Red",
                    alias: "r",
                    info: {
                        "At Work": [
                            "Direct, clear and demanding", "Think they know best and want it done their way", "Impatient with 'slackers'",
                            "Don't mind their decisions questioned if there is a better way", "Workaholics", "Have a clean office"
                        ],
                        "Most Effective": [
                            "Given the opportunity to be creative", "Given challenging jobs that require strong leadership and problem solving skills",
                            "Good at seeing the big picture", "Making decisions"
                        ],
                        "Least Effective": [
                            "Placed in mundane jobs", "Don't like to be fenced in", "Under the leadership of an indecisive person", "Given technical jobs or projects",
                            "When the are required to follow rather than lead"
                        ],
                        "How To Improve": [
                            "By being more sensitive towards co-workers and being less authoritarian", "Continually work at maintaining good people skills", "Try to be less 'bossy'"
                        ]
                    }
                },//end of Red info & object
                {
                    color: "Green",
                    alias: "g",
                    info: {
                        "At Work": [
                            "Consistent and determined", "Follow instructions well", "Easy to work with", "Concentrate on difficult tasks well",
                            "Slow to make decisions", "Want prior notice for change", "Expect appreciation for work well done", "Not Agressive"
                        ],
                        "Most Effective": [
                            "Performing routine tasks", "Good at following procedures and rules", "Can be trusted to perform consistently", "Are good listeners"
                        ],
                        "Least Effective": [
                            "Must work on a variety of jobs", "Must make quick changes", "Do not like to make major decisions"
                        ],
                        "How To Improve": [
                            "By being more self-confident", "Willing to take more risks", "Being more assertive"
                        ]
                    }
                },//end of Green info & object 
                {
                    color: "Yellow",
                    alias: "y",
                    info: {
                        "At Work": [
                            "Group leaders", "Want to sell ideas", "Build excitement and motivate well", "Have messy desks or work areas",
                            "Not detailed and often work from hunches", "Communicate ideas well", "People problems are more important than tasks"
                        ],
                        "Most Effective": [
                            "Generating excitement and enthusiasm", "Work well with change", "Helping people with personal problems",
                            "Good at delegating", "Naturally good at making presentations"
                        ],
                        "Least Effective": [
                            "Working alone on projects", "Looking at details", "Give poor performers too many chances", "Hesitant to give criticism"
                        ],
                        "How To Improve": [
                            "By being more accurate", "By being more realistic with goals", "By being more objective with people", "Stop talking and listen more"
                        ]
                    }
                }//end of Yellow info & object
            ]//end of moreInfo object

        })
} ());