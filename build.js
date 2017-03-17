const fs = require("fs");
let content = fs.readFileSync("./node_modules/step-test/build/step-test.js", "utf8").replace("module.exports", "//");
    content = content.replace(/module.exports/g, "//");
    content += "\n";
    content += fs.readFileSync("./src/karma-step-test-driver.js", "utf8");


let fileWrapper = fs.readFileSync("./src/karma-step-test.wrapper", "utf8");
content = fileWrapper.replace("{{content}}", content);
fs.writeFileSync("./build/karma-step-test.js", content);



