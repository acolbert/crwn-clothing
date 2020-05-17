import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

const ShopPage = ({collections}) => (
            <div className='shop-page'>
                <CollectionsOverview />
                
            </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
});


export default connect(mapStateToProps)(ShopPage);