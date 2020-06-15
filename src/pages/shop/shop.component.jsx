import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  // no need to write super and constructor everytime
  state = {
    loading: true
  }

  unsubscribeFromSnapShop = null;

  componentDidMount(){
      const {updateCollections} = this.props;
      const collectionRef = firestore.collection('collections');

      /*fetch('https://firestore.googleapis.com/v1/projects/lipchat-a0dd3/databases/(default)/documents/collections')
      .then(response => response.json())
      .then(collections => console.log(collections));*/
      

      this.unsubscribeFromSnapShop = collectionRef.get().then(
        snapshop => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
          updateCollections(collectionsMap);
          this.setState({loading:false});
      }
      );
      
      

    /*this.unsubscribeFromSnapShop = collectionRef.onSnapshot(async snapshop => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
        updateCollections(collectionsMap);
        this.setState({loading:false});
    });*/

  }

    render() {

        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
        );
    }
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  });
  

export default connect(null, mapDispatchToProps)(ShopPage);