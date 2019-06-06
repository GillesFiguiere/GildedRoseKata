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
    items.push(new Item('Aged Brie', 0, 15))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 20, 15))
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 15))
    items.push(new Item('Normal', 10, 15))

    const gildedRose = new GildedRose(items)
    const gildedRoseGolden = new GildedRoseGolden(items)

    //WHEN
    for (let day = 0; day < 100; day++) {
      gildedRose.updateQuality()
      gildedRoseGolden.updateQuality()

      //THEN
      expect(gildedRoseGolden).to.eql(gildedRose)
    }
  })

  it("Should decrease quality of conjured item twice as fast as normal item when sellIn not expired", () => {
    //GIVEN
    const items = []

    items.push(new Item('Conjured', 10, 15))

    const gildedRose = new GildedRose(items)

    //WHEN
    const updatedItems = gildedRose.updateQuality()

    //THEN
    expect(updatedItems[0].quality).equals(13)
  })

  it("Should decrease quality of conjured item twice as fast as normal item when sellIn expired", () => {
    //GIVEN
    const items = []

    items.push(new Item('Conjured', 0, 15))

    const gildedRose = new GildedRose(items)

    //WHEN
    const updatedItems = gildedRose.updateQuality()

    //THEN
    expect(updatedItems[0].quality).equals(11)
  })

})
