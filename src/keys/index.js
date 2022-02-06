import * as fs from "fs";

export const keys = {
    get: (path) => {
        return fs.readFileSync(path, "utf8");
    }
}