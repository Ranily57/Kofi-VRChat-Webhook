// Test Output file

const fs = require('fs')
const { execSync } = require("child_process");
const process = require("process");
const { on } = require('events');
const SCRIPT_PATH = "./update-users.js"

const TEST_DATA_FILE = "./test-data.txt"

// User test 1 make a 3€ donation
const EVENT_1 = {
    "name": "user_test_1",
    "amount": "3",
    "type": "Donation"
}
const EXPECT_EVENT_1 = [
    ["user_test_1", "3€"]
]

// User test 1 updates and make a 5€ donation
const EVENT_2 = {
    "name": "user_test_1",
    "amount": "5",
    "type": "Donation"
}
const EXPECT_EVENT_2 = [
    ["user_test_1", "5€"]
]

// A new user makes a 10€ subscription
const EVENT_3 = {
    "name": "user_test_2",
    "amount": "10",
    "type": "Subscription"
}
const EXPECT_EVENT_3 = [
    ["user_test_1", "5€"],
    ["user_test_2", "10€/mois"]
]

// Events to play
const EVENTS = [
    [EVENT_1, EXPECT_EVENT_1],
    [EVENT_2, EXPECT_EVENT_2],
    [EVENT_3, EXPECT_EVENT_3]
]

// remove data file
try {
    fs.unlinkSync(TEST_DATA_FILE)
}
catch (err) { }

// create data file
fs.writeFileSync(TEST_DATA_FILE, "", { encoding: "utf8" })

let groupIndex = 0
for (group of EVENTS) {
    groupIndex++
    const [event, expect] = group
    const env = { "EVENT_RAW": JSON.stringify(event), "FILE_PATH": TEST_DATA_FILE };
    process.stdout.write(execSync(`node ${SCRIPT_PATH}`, { env }).toString())
    const users = fs.readFileSync(TEST_DATA_FILE, { encoding: "utf8" });
    const expectRaw = expect.map((line) => line.join(" : ")).join("\n")
    if (expectRaw !== users) {
        console.error("event " + groupIndex + " failed")
        console.error("expected:")
        console.error(expectRaw)
        console.error("got:")
        console.error(users)
        // remove data file
        try {
            fs.unlinkSync(TEST_DATA_FILE)
        }
        catch (err) { }

        process.exit(1)
    }
    console.log("event " + groupIndex + " passed")
}

console.log("all tests passed")

// remove data file
try {
    fs.unlinkSync(TEST_DATA_FILE)
}
catch (err) { }
