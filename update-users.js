// get content from first argument
const event_raw = process.env.EVENT_RAW;
const fs = require('fs')

try {
    const event_json = JSON.parse(event_raw.split("\n").join(""))
    console.log(event_json)
    const users = fs.readFileSync("./vrchat-kofi-users.txt", { encoding: "utf8" });
    const userArray = users.toString()
        .split("\n")
        .filter(n => n.trim().length)
        .map((line) => line.split(":")
            .map((item) => item.trim()));

    if (!userArray.find(line => line[0] === event_json.name)) {
        userArray.push([event_json.name, event_json.amount])
        console.log("user added")
    }
    else {
        console.log("nothing to add")
    }
    console.log(userArray)

    const textRaw = userArray.map((line) => line.join(" : ")).join("\n")
    fs.writeFileSync("./vrchat-kofi-users.txt", textRaw, { encoding: "utf8" })
    console.log("file written")
}
catch (err) {
    console.error({ err, event_raw })
}