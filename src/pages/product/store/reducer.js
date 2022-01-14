import * as actionType from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  products: [
    {
      productName: 'aggregate',
      productImage: '../../resource/image/aggregate1.jpg',
      productIntro: 'Construction aggregate, or simply aggregate, is a broad category of coarse- to medium-grained particulate material used in construction, including sand, gravel, crushed stone, slag, recycled concrete and geosynthetic aggregates.',
      techDetail: ['product 1 usage','product 1 spec','product1 features','product1 sample']
    },
    {
    productName: 'product2',
    productImage: '',
    productIntro: 'product2',
    techDetail: ['product 2 usage','product 2 spec','product2 features','product2 sample']
    },
    {
    productName: 'product3',
    productImage: '',
    productIntro: 'product3',
    techDetail: ['product 3 usage','product 3 spec','product3 features','product3 sample']
    },
    {
    productName: 'product4',
    productImage: '',
    productIntro: 'product4',
    techDetail: ['product 4 usage','product 4 spec','product4 features','product4 sample']
    },
    {
    productName: 'product5',
    productImage: '',
    productIntro: 'product5',
    techDetail: ['product 5 usage','product 5 spec','product5 features','product5 sample']
    },
    {
    productName: 'product6',
    productImage: '',
    productIntro: 'product6',
    techDetail: ['product 6 usage','product 6 spec','product6 features','product6 sample']
    },
    {
    productName: 'product7',
    productImage: '',
    productIntro: 'product7',
    techDetail: ['product 7 usage','product 7 spec','product7 features','product7 sample']
    },
    {
    productName: 'product8',
    productImage: '',
    productIntro: 'product8',
    techDetail: ['product 8 usage','product 8 spec','product8 features','product8 sample']
    },
    {
    productName: 'product9',
    productImage: '',
    productIntro: 'product9',
    techDetail: ['product 9 usage','product 9 spec','product9 features','product9 sample']
    },
    {
    productName: 'product10',
    productImage: '',
    productIntro: 'product10',
    techDetail: ['product 10 usage','product 10 spec','product10 features','product10 sample']
    },
    {
    productName: 'product11',
    productImage: '',
    productIntro: 'product11',
    techDetail: ['product 11 usage','product 11 spec','product11 features','product11 sample']
    }
  ],
  currentDisplayIndex: 0,
  currentTechMenuIndex: 0,
  imageBaseOnThumbIndex: 0
});

export default (state = defaultState, action) => {
  if(action.type === actionType.UPDATE_DISPLAY_INDEX){
    return state.set('currentDisplayIndex',action.newIndex)
  }
  if(action.type === actionType.UPDATE_TECH_MENU_INDEX){
    return state.set('currentTechMenuIndex',action.newIndex)
  }
  if(action.type === actionType.UPDATE_THUMB_INDEX){
    return state.set('imageBaseOnThumbIndex',action.newIndex)
  }

  return state;
};