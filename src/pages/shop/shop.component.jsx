import React, {useEffect} from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';


const ShopPage = ({match, fetchCollectionsStartAsync}) => {

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
        </div>
    );
    
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
  

export default connect(null, mapDispatchToProps)(ShopPage);