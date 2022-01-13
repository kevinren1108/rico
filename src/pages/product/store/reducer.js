import * as actionType from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  products: [
    {
      productName: 'aggregate',
      productImage: '../../resource/image/aggregate1.jpg',
      productIntro: 'Construction aggregate, or simply aggregate, is a broad category of coarse- to medium-grained particulate material used in construction, including sand, gravel, crushed stone, slag, recycled concrete and geosynthetic aggregates.',
      techDetail: 'aggregate, in building and construction, material used for mixing with cement, bitumen, lime, gypsum, or other adhesive to form concrete or mortar. The aggregate gives volume, stability, resistance to wear or erosion, and other desired physical properties to the finished product. Commonly used aggregates include sand, crushed or broken stone, gravel (pebbles), broken blast-furnace slag, boiler ashes (clinkers), burned shale, and burned clay. '
    },
    {
    productName: 'product2',
    productImage: '',
    productIntro: 'product2',
    techDetail: 'product2'
    },
    {
    productName: 'product3',
    productImage: '',
    productIntro: 'product3',
    techDetail: 'product3'
    },
    {
    productName: 'product3',
    productImage: '',
    productIntro: 'product3',
    techDetail: 'product3'
    },
    {
    productName: 'product4',
    productImage: '',
    productIntro: 'product4',
    techDetail: 'product4'
    },
    {
    productName: 'product5',
    productImage: '',
    productIntro: 'product5',
    techDetail: 'product5'
    },
    {
    productName: 'product6',
    productImage: '',
    productIntro: 'product6',
    techDetail: 'product6'
    },
    {
    productName: 'product7',
    productImage: '',
    productIntro: 'product7',
    techDetail: 'product7'
    },
    {
    productName: 'product8',
    productImage: '',
    productIntro: 'product8',
    techDetail: 'product8'
    },
    {
    productName: 'product9',
    productImage: '',
    productIntro: 'product9',
    techDetail: 'product9'
    },
    {
    productName: 'product10',
    productImage: '',
    productIntro: 'product10',
    techDetail: 'product10'
    }
  ],
  currentDisplayIndex: 0
});

export default (state = defaultState, action) => {
  if(action.type === actionType.UPDATE_DISPLAY_INDEX){
    return state.set('currentDisplayIndex',action.newIndex)
  }
  return state;
};