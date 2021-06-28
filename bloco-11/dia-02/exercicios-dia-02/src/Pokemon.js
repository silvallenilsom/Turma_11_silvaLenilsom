import React from 'react';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: weight, image } = this.props.pokemon;
    return (
      <div>
        <div>
          <h3>Description</h3>
          <spam>Name: { name }</spam>
          <spam>Type: { type }</spam>
          <spam>Weight: { `${weight.value} ${weight.measurementUnit}` }</spam>
        </div>
        <div>
          <img src={ image } alt={ name }/>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
