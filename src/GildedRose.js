const { Item } = require('./Item')

class NormalItem extends Item {
  constructor(item) {
    super(item.name, item.sellIn, item.quality)
    this.item = item
  }

  increaseQuality() {
    if (this.item.quality < 50) this.item.quality++
  }

  decreaseQuality() {
    if (this.item.quality > 0) this.item.quality--
  }

  update() {
    this.item.sellIn--

    this.decreaseQuality()

    if (this.item.sellIn < 0) this.decreaseQuality()
  }
}

class AgedBrieItem extends NormalItem {
  update() {
    this.item.sellIn--

    this.increaseQuality()

    if (this.item.sellIn < 0) this.increaseQuality()
  }
}

class BackstagePassesItem extends NormalItem {
  update() {
    this.item.sellIn--

    this.increaseQuality();

    if (this.item.sellIn < 10) this.increaseQuality()

    if (this.item.sellIn < 5) this.increaseQuality()

    if (this.item.sellIn < 0) this.item.quality = 0
  }
}

class SulfuraItem extends NormalItem {
  update() { }
}

const AGED_BRIE = 'Aged Brie'
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
const SULFURA = 'Sulfuras, Hand of Ragnaros'
const CONJURED = 'Conjured'

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

  updateItem(item) {
    switch (item.name) {
      case SULFURA:
        break

      case AGED_BRIE:
        const agedBrieItem = new AgedBrieItem(item)
        agedBrieItem.update()
        break

      case BACKSTAGE_PASSES:
        const backstagePassesItem = new BackstagePassesItem(item)
        backstagePassesItem.update()
        break

      case CONJURED:
        const conjuredItem = new ConjuredItem(item)
        conjuredItem.update()
        break

      default:
        const normalItem = new NormalItem(item)
        normalItem.update()
    }
  }
}
module.exports = {
  GildedRose
}
