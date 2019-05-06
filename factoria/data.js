var data = {
  namelist: ['gears',
    'ironPlate', 'ironOre',
    'copperOre', 'copperPlate'
  ],
  gears: {
    material: [{ name: 'ironPlate', amount: 0.5 }],
    name: 'gears',
    time: 0.5
  },
  ironPlate: {
    material: [{ name: 'ironOre', amount: 1 }],
    name: 'ironPlate',
    time: 0.5
  },
  copperWire: {
    material: [{ name: 'copperPlate', amount: 0.5 }],
    name: 'copperWire',
    time: 0.5
  },
  copperPlate: {
    material: [{ name: 'copperOre', amount: 1 }],
    name: 'copperPlate',
    time: 0.5
  },
  ironOre: {
    material: [],
    name: 'ironOre',
    time: null
  },
  copperOre: {
    material: [],
    name: 'ironOre',
    time: null
  },
}