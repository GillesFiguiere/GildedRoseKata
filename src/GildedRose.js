const { Item } = require('./Item')

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURA = 'Sulfuras, Hand of Ragnaros';

class GildedRose {
  constructor(items = []) {
    this.items = Array.from(items, item => new Item(item.name, item.sellIn, item.quality));
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      this.updateItem(item);
    }

    return this.items;
  }

  updateItem(item) {
    if (item.name == SULFURA) return

    item.sellIn--

    if (item.name != AGED_BRIE && item.name != BACKSTAGE_PASSES) {
      if (item.quality > 0) {
        if (item.name != SULFURA) {
          item.quality = item.quality - 1;
        }
      }
    }
    else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == BACKSTAGE_PASSES) {
          if (item.sellIn < 10) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 5) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }

    if (item.sellIn < 0) {
      if (item.name != AGED_BRIE) {
        if (item.name != BACKSTAGE_PASSES) {
          if (item.quality > 0) {
            if (item.name != SULFURA) {
              item.quality = item.quality - 1;
            }
          }
        }
        else {
          item.quality = item.quality - item.quality;
        }
      }
      else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
}
module.exports = {
  GildedRose
}
