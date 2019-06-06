const { NormalItem } = require("./NormalItem")

class BackstagePassesItem extends NormalItem {
    constructor(sellIn, quality) {
        super(sellIn, quality)
        this.name = 'Backstage passes to a TAFKAL80ETC concert'
    }

    update() {
        this.sellIn--
        this.increaseQuality()
        if (this.sellIn < 10)
            this.increaseQuality()
        if (this.sellIn < 5)
            this.increaseQuality()
        if (this.sellIn < 0)
            this.quality = 0
    }
}

exports.BackstagePassesItem = BackstagePassesItem