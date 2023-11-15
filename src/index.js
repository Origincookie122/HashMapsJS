const HashMap = require('./HashMaps/hashmaps');

var array = [];
var string = "hello"
var hashmap = new HashMap(10);


(async () => {
    try {
      const hashedString = await hashmap.hash(string);
      await hashmap.insert(string)
      console.log(hashmap.table);
    } catch (error) {
      console.error(error);
    }
})();

