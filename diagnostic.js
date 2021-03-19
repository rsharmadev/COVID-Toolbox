// each true/false question;
selected = {
    a: true,
    b: true,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false
};

// each question's value
let pointDict = {
    'a': 5,
    'b': 5,
    'c': 5,
    'd': 5,
    'e': 5,
    'f': 5,
    'g': 5
};

let index = 0; // how many points they have
let override = false; // override if a question has high priority

for(const [key, value] of Object.entries(selected)) {
    if(value) {
        if(pointDict[key] == "override") {
            override = true;
        } else {
            index += pointDict[key];
        }
    };
};


if(index > 20 || override) {
    console.log('stay home');
} else {
    console.log('u good lol');
    console.log(index);
};