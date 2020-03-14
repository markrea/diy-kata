const joinNames = namesObj => {
  // put object name values in array
  const nameArray = namesObj.map(x => x.name);
  // remove last item from array
  const lastItem = nameArray.pop();
  // create string off remaining names separated by comma and space
  const nameString = nameArray.join(", ");

  return `${nameString} & ${lastItem}`;
};

module.exports = joinNames;
