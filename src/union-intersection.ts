type nobeDeveloper = {
  name: string;
};
// type juniorDeveloper = {
//   name: string;
//   experties: string;
//   experience: number;
// };

type juniorDeveloper = nobeDeveloper & {
  // here "&" sign is defined for intersection type. when we use "|" sign it will call union type and whe we use "&" sign it will call interscetion type.
  experties: string;
  experience: number;
};
type nextLevelDeveloper = juniorDeveloper & {
  leadershipExperiece: number;
  level: "junior" | "mid" | "senior";
};

enum level { // this is "enum" type, most of the time we will avoid using these type
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

const newDeveloper: juniorDeveloper | nextLevelDeveloper = {
  //here "|" sign is used for definning union type that meanst these vairale will except nobeDeveloper property or junior Developer property both. In javascript we used "||" double sign for defining "or" operator, but in typescript we will use "|" single sign to defin "union type" which similer to js or operator.
  name: "Raihan",
  experience: 6,
  experties: "javascript",
  level: "junior",
};

const developer: nextLevelDeveloper = {
  name: "Next vai",
  experience: 2,
  experties: "typescript",
  leadershipExperiece: 1,
  level: "senior",
};
