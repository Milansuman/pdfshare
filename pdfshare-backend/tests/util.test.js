const util = require("../util");

describe("Utility functions", () => {
    test("Hashed strings have not changed", async () => {
        expect(await util.hashString("password")).toBe("6ebc2d1fa9a7a0387eff11c65500dadc")
    });
});