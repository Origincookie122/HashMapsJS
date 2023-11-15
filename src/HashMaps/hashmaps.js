class HashMap {
    constructor(length) {
        if(!length) return console.error('Please provide a length of the table')
        this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.table = new Array(length).fill(null).map(() => []); // Initialize an array of empty arrays
        this.length = length
    }

    async hash(string) {
        if (!string) {
            console.error('Please provide a string');
            return null;
        }

        return new Promise((resolve, reject) => {
            var characters = string.split("");
            var k = 0;

            for (var i = 0; i < characters.length; i++) {
                var character = characters[i];
                var index = this.alphabet.indexOf(character);

                if (index !== -1) {
                    k = k + index + 1;
                } else {
                    reject(`'${character}' not found in the alphabet.`);
                }
            }
            resolve(k % this.length); // Ensure the index is within the range of the table length
        });
    }

    async insert(v) {
        if (!v) {
            console.error('Provide a value');
            return null;
        }

        return new Promise(async (resolve, reject) => {
            try {
                const hashedString = await this.hash(v);
                this.table[hashedString].push(v);
                resolve(hashedString);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = HashMap;