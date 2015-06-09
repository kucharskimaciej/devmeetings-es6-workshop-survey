angular.module('questions')
    .factory('Questions', function() {

        var questions = [
            {
                "id": "dd5fd1cf-79ce-48e3-8ac1-f5fbc26c3d93",
                "code": "function what(arg) {\n    return {\n      rabbit: \"zając\",\n      lion: \"lew\",\n      monkey: \"małpa\"\n    }[arg];\n  }",
                "question": "Co robi ta funkcja?",
                "correct": "18f755b8-1ac1-445e-b8a4-5eff9bc4e166",
                "answers": [
                    {
                        "id": "df2e468d-a9c6-478e-8778-b9b4bcd67033",
                        "text": "nic, to nie jest poprawny kod JS"
                    },
                    {
                        "id": "18f755b8-1ac1-445e-b8a4-5eff9bc4e166",
                        "text": "tłumaczy angielską nazwę zwierzęcia na polską"
                    },
                    {
                        "id": "587e08a8-8b6d-495b-aa37-a3bc54aca99e",
                        "text": "zwraca obiekt z nazwami zwierząt"
                    }
                ]
            },
            {
                "id": "7c2dc2a1-987a-4e8c-8ee9-975ec1564286",
                "code": "\"use strict\";\n(function() {\n   var a = b = 1337;\n})();",
                "question": "Jaka jest wartość zmiennej b?",
                "correct": "129a595f-2b28-4399-893f-61b68fbec81e",
                "answers": [
                    {
                        "id": "a4c087cc-6e03-4688-a8f4-067244dfa208",
                        "text": "undefined"
                    },
                    {
                        "id": "129a595f-2b28-4399-893f-61b68fbec81e",
                        "text": "wykonanie tego kodu zwróci błąd (ReferenceError)"
                    },
                    {
                        "id": "01e7f2c3-45da-4805-b8e6-bc62becaf486",
                        "text": "1337"
                    }
                ]
            },
            {
                "id": "b4911b38-7f31-473a-85bc-8973e05b61fa",
                "code": "(function(x) {\n    return (function(y) {\n        console.log(x);\n    })(2)\n})(1);",
                "question": "Konsola pokaże:",
                "correct": "e669b95e-ed0d-4625-bbba-7523fb9a1016",
                "answers": [
                    {
                        "id": "541ead53-938d-4303-a863-4790ba742b32",
                        "text": "błąd"
                    },
                    {
                        "id": "4c6e58e9-1781-4de2-992d-579f538665b2",
                        "text": "nic (console.log nie zostanie wykonany)"
                    },
                    {
                        "id": "e669b95e-ed0d-4625-bbba-7523fb9a1016",
                        "text": "1"
                    },
                    {
                        "id": "9cb1d479-84e4-4b1d-951d-f4a1da010849",
                        "text": "2"
                    }
                ]
            },
            {
                "id": "12b136ba-e54a-45f7-baed-06c9b2ad1c90",
                "code": "(function() {\n  return \n  {\n      bar: \"hello\"\n  };\n});",
                "question": "Wykonanie tej funkcji zwróci:",
                "correct": "fcc995f0-bd1d-4912-82d5-c2bee788eb93",
                "answers": [
                    {
                        "id": "dbc64dc9-61e8-4ae7-89e7-f0c5b3776b92",
                        "text": "nic, to nie jest poprawny JS"
                    },
                    {
                        "id": "fcc995f0-bd1d-4912-82d5-c2bee788eb93",
                        "text": "undefined"
                    },
                    {
                        "id": "1467fe97-238b-4a94-975a-0bacf796d021",
                        "text": "{ bar: 'hello' }"
                    }
                ]
            },
            {
                "id": "7f498dea-6749-49ae-9b60-9a4a3a037d4c",
                "code": "(function() {\n    console.log(“a”); \n    setTimeout(function(){console.log(“b”)}, 1000); \n    setTimeout(function(){console.log(“c”)}, 0); \n    console.log(“d”);\n}());",
                "question": "W jakiej kolejności zostaną wyświetlone litery?",
                "correct": "3c7dd4b7-d996-4d38-b770-7856235c53cf",
                "answers": [
                    {
                        "id": "24f69552-8630-4503-a777-5a3b82552698",
                        "text": "a, b, c, d"
                    },
                    {
                        "id": "23bf7d7e-bb46-4524-91d8-08d2aa23ecb7",
                        "text": "a, c, d, b"
                    },
                    {
                        "id": "3c7dd4b7-d996-4d38-b770-7856235c53cf",
                        "text": "a, d, c, b"
                    }
                ]
            },
            {
                "id": "299c866e-a798-44e3-80c9-c9c9645b627e",
                "code": "var trick = {},\n    foo = { id: 12 },\n    bar = { id: 17 };\n\ntrick[foo] = “hello”;\ntrick[bar] = “ World!”;\n\nconsole.log(trick[foo]);",
                "question": "Co zostanie wyświetlone na konsoli?",
                "correct": "3db07c95-3d1d-4429-b4d2-65d6574b94f0",
                "answers": [
                    {
                        "id": "31ddeb01-14f6-46ef-837b-9bedd4be0784",
                        "text": "hello"
                    },
                    {
                        "id": "3db07c95-3d1d-4429-b4d2-65d6574b94f0",
                        "text": " World!"
                    },
                    {
                        "id": "112f087c-5bc0-4ff5-95b5-fcf063b0aa4d",
                        "text": "{ id: 12 }"
                    },
                    {
                        "id": "a38ac3f3-d81d-4f14-bfe1-7c3252f0fe0e",
                        "text": "nic, to nie jest poprawny JS"
                    }
                ]
            },
            {
                "id": "82e53822-b3f6-4be5-810c-694eaf31d5e3",
                "code": "for (var delay = 0; delay < 3; delay++) {\n  setTimeout(function() { console.log(delay); }, delay * 1000 );\n}",
                "question": "Konsola pokaże: ",
                "correct": "6171f04b-0005-4499-b1d7-be27379212b4",
                "answers": [
                    {
                        "id": "7871c1e5-4380-46a4-a738-c8e10ad5241c",
                        "text": "0, 1, 2, 3"
                    },
                    {
                        "id": "c88e5437-93e3-4af8-a87e-65f5639afa68",
                        "text": "0, 1, 2"
                    },
                    {
                        "id": "6171f04b-0005-4499-b1d7-be27379212b4",
                        "text": "3, 3, 3"
                    }
                ]
            }
        ];

        questions.forEach(function(q) {
            questions[q.id] = q;
            q.answers.sort(random);
        });

        var _ids = questions.map(function(q) {
            return q.id;
        });

        return {
            questions: questions,
            next: function() {
                return _ids.sort(random).pop();
            }
        };

        function random() {
            return 0.5 - Math.random();
        }
    });