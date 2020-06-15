import { ShopActionTypes} from './shop.types';

//payload is optional, we are not using it here
export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});