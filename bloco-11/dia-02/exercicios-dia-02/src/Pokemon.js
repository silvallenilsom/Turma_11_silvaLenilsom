import { Component } from 'react';
import PropTypes from 'prop-types';


class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: weight, image } = this.props;
    return (
      <div>
        <div>
          <h3>Description</h3>
          { console.log(`name: ${name},type: ${type},peso: ${weight}`) }
          <spam>Name: { name }</spam>
          <spam>Type: { type }</spam>
          <spam>Weight: { `${weight} ${weight}` }</spam>
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
    weight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
