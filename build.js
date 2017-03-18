const fs = require("fs");
let content = fs.readFileSync("./node_modules/step-test/build/step-test.js", "utf8").replace("module.exports", "//");
    content = content.replace(/module.exports/g, "//");
    content += "\n";


let fileWrapper = fs.readFileSync("./src/index.js", "utf8");
content = fileWrapper.replace("{{content}}", content);
fs.writeFileSync("./build/karma-step-test.js", content);



