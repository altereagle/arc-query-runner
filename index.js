module.exports = ({incoming}) => {
  const { path } = incoming;

  const pathRelatedThings = {
    'cypher': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'postgres': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'nosql': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'mysql': () => {
      return `I don't do this yet, but I will soon!`;
    }
  };

  // Do path related things
  // ----------------------
  if(path != null && pathRelatedThings[path]) return pathRelatedThings[path]();

  return `Hey, I'll run that query for you no problem!`;
};
