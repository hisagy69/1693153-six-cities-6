import React from 'react';
import Gallery from './gallery';
import Header from '../header';
import Property from './property';
import NearPlaces from './near-places';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {connect} from 'react-redux';
import cards from '../../moks/offers';
import {ActionCreators} from '../../store/action';
const OfferScreen = (props) => {
  return <div className="page">
    <Header/>
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              props.offer.gallery.map((image, i) => (
                <Gallery image={image} key={i}/>
              ))
            }
          </div>
        </div>
        <Property {...props.offer} reviews={props.reviews}/>
        <section className="property__map map"><Map offers={props.offers} activeId={props.activeId}/></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {props.offers.map((card) => {
              return <NearPlaces {...card} onIdMarker={props.onIdMarker} key={card.id}/>;
            })}
          </div>
        </section>
      </div>
    </main>
  </div>;
};
const mapDispatchToProps = (dispatch) => ({
  onIdMarker(id) {
    dispatch(ActionCreators.setId(id));
  }
});
const mapStateToProps = (state) => ({
  city: state.city,
  offers: cards.filter((card) => card.location === state.city),
  activeId: state.id
});
OfferScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  reviews: PropTypes.array,
  city: PropTypes.string.isRequired,
  offer: PropTypes.object.isRequired,
  activeId: PropTypes.string,
  onIdMarker: PropTypes.func.isRequired
};
export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
