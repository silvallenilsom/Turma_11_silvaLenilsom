import React from 'react';

class Pokemon extends React.Component {
render() {
  const { name, type, averageWeight: weight } = this.props;
  return (
    <div>
      <div>
        <h3>Description</h3>
        <spam>Name: { name }</spam>
        <spam>Type: { type }</spam>
        <spam>Weight: { weight }</spam>
      </div>
      <div>

      </div>
    </div>
  );
}
}

export default Pokemon;
