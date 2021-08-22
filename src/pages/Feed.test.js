const Feed = require("./Feed")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Feed.default()
    })

    test("0", async () => {
        await inst.componentDidMount()
    })
})
