/*前缀树*/
var Trie = function() {
    this.map = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.map;
    for(const s of word){
        if(!node[s]){
            node[s] = {}
        }
        node = node[s];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let c= this.find(word);
    return c!==undefined && c.isEnd !==undefined;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.find(prefix)
};

Trie.prototype.find = function(word) {
    let node = this.map;
    for(const s of word){
        if(!node[s]){
            return false;
        }
        node = node[s];
    }
    return node;
};


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */