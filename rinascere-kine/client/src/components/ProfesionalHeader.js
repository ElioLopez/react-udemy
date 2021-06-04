import React from 'react';
import { connect } from 'react-redux';
import { fetchProfesional } from '../actions';

class ProfesionalHeader extends React.Component {
  componentDidMount() {
    this.props.fetchProfesional(this.props.profesionalId);
  }

  render() {
    const profesional = this.props.profesionales.find((profesional) => profesional.id === this.props.profesionalId);

    if (!profesional) {
      return null;
   }

    return <div className="header">{profesional.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return { profesionales: state.profesionales};
};

export default connect(
  mapStateToProps,
  { fetchProfesional }
)(ProfesionalHeader);
