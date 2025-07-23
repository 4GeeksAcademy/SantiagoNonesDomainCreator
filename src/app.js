function domainCreator () {
    let pronoun = ["el","un","nuestro","vuestro"];
    let adj = ["lindo","guapo","bello","precioso"];
    let noun = ["momento","regalo","sujeto","abrazo"];
    let sub = [".net",".si",".no",".woo"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) { 
      for (let l = 0; l < sub.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + sub[l]); 
        }
      }
    }
  }
}

domainCreator (); 