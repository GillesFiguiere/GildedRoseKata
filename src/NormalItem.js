const { Item } = require('./Item')

class NormalItem extends Item {
    constructor(sellIn, quality) {
        super('Normal', sellIn, quality)
    }

    increaseQuality() {
        if (this.quality < 50)
            this.quality++
    }

    decreaseQuality() {
        if (this.quality > 0)
            this.quality--
    }

    update() {
        this.sellIn--
        this.decreaseQuality()
        if (this.sellIn < 0)
            this.decreaseQuality()
    }
}

exports.NormalItem = NormalItem
