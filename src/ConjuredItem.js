const { NormalItem } = require("./NormalItem")

class ConjuredItem extends NormalItem {
    constructor(sellIn, quality) {
        super(sellIn, quality)
        this.name = 'Conjured'
    }

    update() {
        this.sellIn--
        this.decreaseQuality()
        this.decreaseQuality()
        if (this.sellIn < 0) {
            this.decreaseQuality()
            this.decreaseQuality()
        }
    }
}

exports.ConjuredItem = ConjuredItem