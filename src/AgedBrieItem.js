const { NormalItem } = require("./NormalItem")

class AgedBrieItem extends NormalItem {
    constructor(sellIn, quality) {
        super(sellIn, quality)
        this.name = 'Aged Brie'
    }

    update() {
        this.sellIn--
        this.increaseQuality()
        if (this.sellIn < 0)
            this.increaseQuality()
    }
}

exports.AgedBrieItem = AgedBrieItem