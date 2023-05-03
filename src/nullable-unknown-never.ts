const searchName = (value: string | null) => {
  if (value === null) {
    console.log("there is nothing to search");
  } else {
    console.log("searching...");
  }
};
searchName(null);

