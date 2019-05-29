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
    switch (item.name) {
      case SULFURA:
        break
      case AGED_BRIE:
        this.updateAgedBrie(item)
        break
      case BACKSTAGE_PASSES:
        this.updateBackStagePasses(item)
        break
      default:
        this.updateNormalItem(item)
    }
  }

  updateNormalItem(item) {
    item.sellIn--

    this.decreaseQuality(item);
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  updateBackStagePasses(item) {
    item.sellIn--

    this.increaseQuality(item);
    if (item.sellIn < 10) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 5) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateAgedBrie(item) {
    item.sellIn--

    this.increaseQuality(item);
    
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }
}
module.exports = {
  GildedRose
}
