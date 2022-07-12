const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 1000;
app.use(cors());
const aliens = {
    human: {
        speciesName: "Humans",
        homeWorld: "Earth",
        features: "rounded ears, hair on head and face (sometimes)",
        interestingFact: "Central member of the Planetary Union",
        notableMembers: ["Ed Mercer", "Claire Finn", "Tucker", "Gordon Malloy"],
        // image: "https://static.wikia.nocookie.net/orville/images/2/27/EMercer.jpg/revision/latest?cb=20171004230231",
        image: "/img/Or-s1_21-seth-hallway_2781rcb_hires1-0.jpg",
    },
    gelatin: {
        speciesName: "Gelatin",
        homeWorld: "Unrevealed",
        features: "Composed of a jelly-like substance. Bright green.",
        interestingFact:
            "Have Ability to shape their bodies into whatever physical form they chose to repair themselves whenever damaged, including rejoining separations of their bodies. ",
        notableMembers: ["Yaphit"],
        // image: "https://static.wikia.nocookie.net/orville/images/9/9c/Orville-norm-macdonald.jpg/revision/latest/scale-to-width-down/1000?cb=20170922163525",
        image: "./img/Orville-norm-macdonald.jpg",
    },
    kaylon: {
        speciesName: "Kaylon",
        homeWorld: "Kaylon 1",
        features: "artificial lifeforms. ",
        interestingFact:
            "Kaylons were constructed by a biological species native to Kaylon 1, known as 'Builders' Eventually, leading to their demise.",
        notableMembers: ["Isaac"],
        // image: "https://static.wikia.nocookie.net/orville/images/e/ef/Isaac2.jpg/revision/latest/scale-to-width-down/1000?cb=20171002233754",
        image: "img/Kaylon_Secondary.jpg",
    },
    krill: {
        speciesName: "Krill",
        homeWorld: "Krill",
        features:
            "Reptillian humanoid species. They have tough, scaly skin with three bony ridges running along their skull.",
        interestingFact:
            "In Krill society, sunlight is a symbol of death, while rain and darkness are symbols of good.",
        notableMembers: ["Anaya", "Korin", "Teleya", "Haros", "Sazeron"],
        image: "data:image/jpeg;base64,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",
    },
    moclan: {
        speciesName: "Moclan",
        homeWorld: "Moclus",
        features:
            "Possess light brown skin. Cranial ridges and skin spots that run along the sides and top of their heads. Naturally hairless",
        interestingFact:
            "Moclans reproduced by laying eggs. The Moclan government almost always forcibly changed the sex of a female to male shortly after birth.",
        notableMembers: ["Bortus", "Klyden", "Mersa", "Topa"],
        // image: "https://static.wikia.nocookie.net/orville/images/2/2f/Bortus2.jpg/revision/latest/scale-to-width-down/1000?cb=20171006200215",
        image: "img/Bortus2.jpg",
    },
    xelayan: {
        speciesName: "Xelayan",
        homeWorld: "Xeleya",
        features:
            "Xelayans were humanoid in appearance with pointy, indented ears, and ridges on their foreheads and the bridges of the nose.",
        interestingFact:
            "Due to the comparatively high gravity of their home planet, Xelayans enjoyed exceptional strength outside of Xelaya.",
        notableMembers: ["Alara Kitan", "Cambis Borrin", "Serris"],
        // image: "https://static.wikia.nocookie.net/orville/images/9/90/Alara.jpg/revision/latest/scale-to-width-down/1000?cb=20171002233437",
        image: "img/Alara.jpg",
    },
};
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});
app.get("/api/:alienName", (request, response) => {
    const aliensName = request.params.alienName;
    if (aliens[aliensName]) {
        response.json(aliens[aliensName]);
    } else {
        response.json(aliens["humans"]);
    }
});
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running.");
});
