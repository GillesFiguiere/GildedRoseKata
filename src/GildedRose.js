const { Item } = require('./Item')

const AGED_BRIE = 'Aged Brie'
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
const SULFURA = 'Sulfuras, Hand of Ragnaros'

class GildedRose {
  constructor(items = []) {
    this.items = Array.from(items, item => new Item(item.name, item.sellIn, item.quality))
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      this.updateItem(item)
    }

    return this.items
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality++
    }
  }

  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality--
    }
  }

  updateItem(item) {
    if (item.name == SULFURA) return

    item.sellIn--

    if (item.name == AGED_BRIE) {
      this.increaseQuality(item)

    } else if (item.name == BACKSTAGE_PASSES) {
      if (item.quality < 50) {
        item.quality++
        if (item.sellIn < 10) {
          this.increaseQuality(item)
        }
        if (item.sellIn < 5) {
          this.increaseQuality(item)
        }
      }

    } else {

      this.decreaseQuality(item)
    }

    if (item.sellIn < 0) {
      if (item.name != AGED_BRIE) {
        if (item.name != BACKSTAGE_PASSES) {
          this.decreaseQuality(item)
        }
        else {
          item.quality = 0
        }
      }
      else {
        this.increaseQuality(item)
      }
    }
  }
}
module.exports = {
  GildedRose
}
