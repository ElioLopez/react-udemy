import React from 'react';
import { connect } from 'react-redux';
import { fetchEjercicios } from '../actions';
import ProfesionalHeader from './ProfesionalHeader';

class EjerciciosList extends React.Component {
  componentDidMount() {
    this.props.fetchEjercicios();
    }

  renderList() {
    return this.props.ejercicios.map(ejercicio => {
      return (
        <div className="item" key={ejercicio.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{ejercicio.titulo}</h2>
              <p>{ejercicio.region}</p>
            </div>
            <ProfesionalHeader profesionalId={ejercicio.creadorId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { ejercicios: state.ejercicios };
};

export default connect(
  mapStateToProps,
  { fetchEjercicios }
)(EjerciciosList);
