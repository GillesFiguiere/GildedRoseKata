const { expect } = require('chai')
const { GildedRose } = require('../src/GildedRose')
const { GildedRoseGolden } = require('../src/GildedRoseGolden')
const { Item } = require('../src/Item')
const { SulfuraItem } = require('../src/SulfuraItem')
const { AgedBrieItem } = require('../src/AgedBrieItem')
const { BackstagePassesItem } = require('../src/BackstagePassesItem')
const { NormalItem } = require('../src/NormalItem')
const { ConjuredItem } = require('../src/ConjuredItem')


describe("Gilded Rose", function () {

  it("should give the same result as GildedRoseGolden", function () {
    //GIVEN
    const items = []

    items.push(new SulfuraItem(10, 15))
    items.push(new SulfuraItem(-50, 50))
    items.push(new AgedBrieItem(10, 15))
    items.push(new AgedBrieItem(0, 15))
    items.push(new BackstagePassesItem(20, 15))
    items.push(new BackstagePassesItem(10, 15))
    items.push(new NormalItem(10, 15))
    items.push(new NormalItem(0, 15))

    const goldenItems = Array.from(items, item => new Item(item.name, item.sellIn, item.quality))

    const gildedRose = new GildedRose(items)
    const gildedRoseGolden = new GildedRoseGolden(goldenItems)

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

    items.push(new ConjuredItem(10, 15))

    const gildedRose = new GildedRose(items)

    //WHEN
    const updatedItems = gildedRose.updateQuality()

    //THEN
    expect(updatedItems[0].quality).equals(13)
  })

  it("Should decrease quality of conjured item twice as fast as normal item when sellIn expired", () => {
    //GIVEN
    const items = []

    items.push(new ConjuredItem(0, 15))

    const gildedRose = new GildedRose(items)

    //WHEN
    const updatedItems = gildedRose.updateQuality()

    //THEN
    expect(updatedItems[0].quality).equals(11)
  })

})
