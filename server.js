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
        notableMembers: "Ed Mercer, Claire Finn, Tucker, Gordon Malloy",
        image: "test",
    },
    gelatin: {
        speciesName: "Gelatin",
        homeWorld: "Unrevealed",
        features: "Composed of a jelly-like substance. Bright green.",
        interestingFact:
            "Have Ability to shape their bodies into whatever physical form they chose to repair themselves whenever damaged, including rejoining separations of their bodies. ",
        notableMembers: "Yaphit",
        image: "test",
    },
    kaylon: {
        speciesName: "Kaylon",
        homeWorld: "Kaylon 1",
        features: "artificial lifeforms. ",
        interestingFact:
            "Kaylons were constructed by a biological species native to Kaylon 1, known as 'Builders' Eventually, leading to their demise.",
        notableMembers: "Isaac",
        image: "test",
    },
    krill: {
        speciesName: "Krill",
        homeWorld: "Krill",
        features:
            "Reptillian humanoid species. They have tough, scaly skin with three bony ridges running along their skull.",
        interestingFact:
            "In Krill society, sunlight is a symbol of death, while rain and darkness are symbols of good.",
        notableMembers: "Anaya, Korin, Teleya, Haros, Sazeron",
        image: "test",
    },
    moclan: {
        speciesName: "Moclan",
        homeWorld: "Moclus",
        features:
            "Possess light brown skin. Cranial ridges and skin spots that run along the sides and top of their heads. Naturally hairless",
        interestingFact:
            "Moclans reproduced by laying eggs. The Moclan government almost always forcibly changed the sex of a female to male shortly after birth.",
        notableMembers: "Bortus, Klyden, Mersa, Topa",
        image: "test",
    },
    xelayan: {
        speciesName: "Xelayan",
        homeWorld: "Xeleya",
        features:
            "Xelayans were humanoid in appearance with pointy, indented ears, and ridges on their foreheads and the bridges of the nose.",
        interestingFact:
            "Due to the comparatively high gravity of their home planet, Xelayans enjoyed exceptional strength outside of Xelaya.",
        notableMembers: "Alara Kitan, Cambis Borrin, Serris",
        image: "test",
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
