const { NormalItem } = require("./NormalItem")

class SulfuraItem extends NormalItem {
    constructor(sellIn, quality) {
        super(sellIn, quality)
        this.name = 'Sulfuras, Hand of Ragnaros'
    }

    update() { }
}

exports.SulfuraItem = SulfuraItem