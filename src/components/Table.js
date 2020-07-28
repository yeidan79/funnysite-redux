import React from 'react';
import Row from '../containers/Row';
import { connect } from 'react-redux';

const Table = (props) => {

  const renderJokes = () => {
    if (props.loading) return <tr><td className="tc f1">Loading...</td></tr>;
    if (props.hasErrors) return <tr><td>Unable to display jokes.</td></tr>;
    return props.jokes.map((joke, i) => {
          return <Row key={i} id={i+1} value={props.jokes[i]}/>
      })
  }

  return(
    <table className="f6 w-100 mw8 center bkg">
      <thead>
      <tr>
        <th className="tc fw6 tl pa3 bg-white f4">ID</th>
        <th className="tc fw6 tl pa3 bg-white f4"><p className="grow-large center pa1 ma1">Joke!</p></th>
      </tr>
      </thead>
      <tbody className="lh-copy">
        {renderJokes()}
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  loading: state.jokes.loading,
  jokes: state.jokes.jokes,
  hasErrors: state.jokes.hasErrors,
});

export default connect(mapStateToProps)(Table)
