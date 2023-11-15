const HashMap = require('./HashMaps/hashmaps');

var array = [];
var string = "hello"
var hashmap = new HashMap();


(async () => {
    try {
      const hashedString = await hashmap.hash(string);
      await hashmap.insert(string)
      console.log(hashmap.table[hashedString]);
    } catch (error) {
      console.error(error);
    }
  })();

