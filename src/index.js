const HashMap = require('./HashMaps/hashmaps');

var array = [];
var string = "hello"
var hashmap = new HashMap(10);


(async () => {
    try {
      var result = await hashmap.insert(string)
      console.log(result);
      console.log(hashmap.table[result['hash']])
    } catch (error) {
      console.error(error);
    }
})();

