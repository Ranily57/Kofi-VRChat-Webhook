// Created by Spokeek and edit by Ranily
const EVENT_RAW = process.env.EVENT_RAW;
const FILE_PATH = process.env.FILE_PATH || "./vrchat-kofi-users.txt"

const fs = require('fs')

try {
    const event_json = JSON.parse(EVENT_RAW.split("\n").join(""))
    console.log(event_json)

    const users = fs.readFileSync(FILE_PATH, {encoding: "utf8"});
    const userArray = users.toString().split("\n").filter(n => n.trim().length).map((line) => line.split(":").map((item) => item.trim()));
    const type = event_json.type;
    let amount = event_json.amount;

    if(type == "Subscription") {
        amount = event_json.amount + "€/mois"
        console.log("Type Subscription")
    }
    else {
        amount = event_json.amount + "€"
        console.log("Type Donation")
    }
    
    if(!userArray.find(line => line[0] === event_json.name)) {
        userArray.push([event_json.name, amount])
        console.log("user added")
    }
    else {
        const index = userArray.findIndex(line => line[0] === event_json.name)
        userArray[index][1] = amount
        console.log("updated existing user")
    }
    console.log(userArray)

    const textRaw = userArray.map((line) => line.join(" : ")).join("\n")
    fs.writeFileSync(FILE_PATH, textRaw, { encoding: "utf8" })
    console.log("file written")
}
catch(err) {
    console.error({err, EVENT_RAW})
}
