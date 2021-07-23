import {getTitleFromHtml} from "../utils/common";
import {readFile} from "fs/promises";
import * as path from "path";

it('Returns title when only a title tag is provided', () => {
    expect(getTitleFromHtml("<title>MyTitle</title>")).toBe("MyTitle");
});

it('Returns title when a full html document is provided', () => {
    readFile(path.join(__dirname, "files", "template.html"), {encoding: "utf-8"}).then((html) => {
        expect(getTitleFromHtml(html)).toBe("template");
    })
});

it('Returns empty string when there\'s no title tag', () => {
    expect(getTitleFromHtml("<h1>title tag</h1>")).toBe("");
});

it('Returns empty string when there\'s empty title tag', () => {
    expect(getTitleFromHtml("<title></title>")).toBe("");
});
