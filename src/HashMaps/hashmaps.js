class HashMap {
    constructor() {
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.table = [];
    }
    async hash(string) {
        if (!string) {
            console.error('Please provide a string')
        }

        return new Promise((resolve, reject) => {
            var characters = string.split("");
            var k = 0
            for (var i = 0; i < characters.length; i++) {
                var character = characters[i];
                var index = this.alphabet.indexOf(character);

                if (index !== -1) {
                    k = k + index + 1
                } else {
                    reject(`'${character}' not found in the alphabet.`)
                }
            }
            resolve(k);
        })
    }

    async insert(v) {
        //if(!k) return console.error('Provide a key') // Will use later
        if (!v) return console.error('Provide a value')

        return new Promise((resolve, reject) => {
            try {
                (async () => {
                    const hashedString = await this.hash(v);
                    this.table[hashedString] = v;
                    resolve(hashedString);
                })();
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = HashMap;