import React from 'react';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';

import {fetchNumber} from '../actions/numberActions';
import './css/Row.css';

const Row = (props) => {

  const renderNumber = () => {
    if (props.loading) return <p>Loading...</p>
    if (props.hasErrors) return <p>Unable to display number.</p>
    return (props.number.charAt(0) === props.pastNumber.charAt(0)) ?
            props.pastNumber : props.number
  }

  return(
    <tr>
    <td className="tc pa3 bg-white"
      data-tip=""
      onMouseOver={() => props.dispatch(fetchNumber(props.id))}
      >
      {/*dispatch comes from father app -> store!*/}
      {props.id}
      <ReactTooltip place="left" type="dark" effect="float">
        <p>
          {renderNumber()}
        </p>
      </ReactTooltip>
    </td>
    <td className="pa3 bg-white highlight">{props.value}</td>
    </tr>
  );
}

const mapStateToProps = state => ({
  pastNumber: state.number.pastNumber,
  loading: state.number.loading,
  number: state.number.number,
  hasErrors: state.number.hasErrors,
});

export default connect(mapStateToProps)(Row)
