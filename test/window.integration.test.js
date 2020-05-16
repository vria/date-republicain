import {JSDOM} from "jsdom";
import fs from "fs";
import path from "path";

const addScriptToDom = function (window, srcPath) {
    const src = fs.readFileSync(path.resolve(__dirname, srcPath), {"encoding": "utf-8" }),
        script = window.document.createElement("script");
    script.textContent = src;
    window.document.body.appendChild(script);
};

test("Integration test: getRepublicainDate is functional in window", () => {
    const {window} = new JSDOM(``, { runScripts: "dangerously" });
    addScriptToDom(window, "../node_modules/moment/moment.js");
    addScriptToDom(window, "../dist/date-republicain.js");

    const republicainDate = window.getRepublicainDate("1799-09-22");
    expect(republicainDate.day()).toBe(6);
    expect(republicainDate.month()).toBe(13);
    expect(republicainDate.year()).toBe(7);
});
