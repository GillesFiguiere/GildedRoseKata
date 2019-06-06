
const { NormalItem } = require('./NormalItem')

class GildedRose {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      this.updateItem(item)
    }

    return this.items
  }

  updateItem(item) {
    item.update()
  }
}
module.exports = {
  GildedRose
}
