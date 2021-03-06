module.exports = class {
    constructor() {
        this._data = Object.create(null);
    }

    get([hi, lo]) {
        let node = this._data[hi];
        return node && node[lo];
    }

    set([hi, lo], obj) {
        let node = this._data[hi] || (this._data[hi] = Object.create(null));
        node[lo] = obj;
    }

    *entries() {
        for (let [hi, node] of Object.entries(this._data)) {
            for (let [lo, obj] of Object.entries(node)) {
                yield [[+hi, +lo], obj];
            }
        }
    }
};
