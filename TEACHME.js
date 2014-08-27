var steps = [
[ //*********************************** SCOPES
        {
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 5);
                var c = randomInt(1, 5);
                if (c === b) {
                    c += 1;
                }
                return "function hello () {\n\ta = a + " + b + ";\n\treturn;\n}\n\nvar a = " + a + ";\nhello();\na + " + c + ";";
            }
        },{
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 6);
                var c = randomInt(1, 4);
                if (b === a) {
                    b += 2;
                }
                return "function hello () {\n\ta = " + b + ";\n\treturn;\n}\n\nvar a = " + a + ";\na + " + c + ";";
            }
        },{
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 6);
                var c = randomInt(1, 4);
                if (b === a) {
                    b += 2;
                }
                return "function hello () {\n\tvar a = " + b + ";\n\treturn;\n}\n\nvar a = " + a + ";\nhello();\na + " + c + ";";
            }
        },{
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 5);
                var c = randomInt(1, 5);
                if (c === b) {
                    c += 1;
                }
                return "function hello () {\n\ta = a + " + b + ";\n\treturn;\n}\n\nvar a = " + a + ";\nhello();\na + " + c + ";";
            }
        },{
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 5);
                var c = randomInt(1, 5);
                var d = randomInt(1, 6);
                if (c === b) {
                    c += 1;
                }
                return "function hello (a) {\n\ta = a + " + b + ";\n\treturn;\n}\n\nvar a = " + a + ";\nhello(" + d + ");\na + " + c + ";";
            }
        }
        
    ]
];
