const { expect } = require('chai')
const { GildedRose } = require('../src/GildedRose')
const { GildedRoseGolden } = require('../src/GildedRoseGolden')
const { Item } = require('../src/Item')


describe("Gilded Rose", function () {

  it("should give the same result as GildedRoseGolden", function () {
    //GIVEN
    const items = []

    items.push(new Item('Sulfuras, Hand of Ragnaros', 10, 15))
    items.push(new Item('Sulfuras, Hand of Ragnaros', -50, 50))
    items.push(new Item('Aged Brie', 10, 15))
    items.push(new Item('Aged Brie', 10, 15))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 20, 15))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15))
    items.push(new Item('Conjured', 10, 15))

    const gildedRose = new GildedRose(items)
    const gildedRoseGolden = new GildedRoseGolden(items)

    //WHEN
    for (let day = 0; day < 100; day++) {
      gildedRose.updateQuality()
      gildedRoseGolden.updateQuality()

      const gildedRoseSellIn = gildedRose.items.map(item => item.sellIn)
      const gildedRoseGoldenSellIn = gildedRoseGolden.items.map(item => item.sellIn)
      const gildedRoseQuality = gildedRose.items.map(item => item.quality)
      const gildedRoseGoldenQuality = gildedRoseGolden.items.map(item => item.quality)

      //THEN
      expect(gildedRoseGoldenQuality).to.eql(gildedRoseQuality)
      expect(gildedRoseGoldenSellIn).to.eql(gildedRoseSellIn)
    }
  })

})
