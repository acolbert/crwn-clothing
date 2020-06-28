import { ShopActionTypes} from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

/*
//payload is optional, we are not using it here
export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});
*/

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {//add dispatch so you can use it in the method with Thunk

        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());
        collectionRef.get().then(
            snapshop => {
              const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
              dispatch(fetchCollectionsSuccess(collectionsMap));
          }
        ).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};