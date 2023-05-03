"use strict";
var level;
(function (level) {
    level["junior"] = "junior";
    level["mid"] = "mid";
    level["senior"] = "senior";
})(level || (level = {}));
const newDeveloper = {
    //here "|" sign is used for definning union type that meanst these vairale will except nobeDeveloper property or junior Developer property both. In javascript we used "||" double sign for defining "or" operator, but in typescript we will use "|" single sign to defin "union type" which similer to js or operator.
    name: "Raihan",
    experience: 6,
    experties: "javascript",
    level: "junior",
};
const developer = {
    name: "Next vai",
    experience: 2,
    experties: "typescript",
    leadershipExperiece: 1,
    level: "senior",
};
