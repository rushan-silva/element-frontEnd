import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { fetchSuggestionData } from "../../actions/suggestionAction";
import Prototypes from "prop-types";

class SuggestionTbl extends Component {
  componentWillMount() {
    this.props.fetchSuggestionData();
  }

  render() {
    return (
      <Paper>
        <h4
          style={{
            textIndent: 20,
            fontSize: 20,
            color: "blue",
            textAlign: "justify"
          }}
        >
          Suggestion Prediction
        </h4>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Suggestions</TableCell>
              <TableCell numeric>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.suggestionData.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.count}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SuggestionTbl.propTypes = {
  fetchSuggestionData: Prototypes.func.isRequied,
  suggestionData: Prototypes.array.isRequired
};

const mapStateToProps = state => ({
  suggestionData: state.suggestion.items
});

export default connect(
  mapStateToProps,
  { fetchSuggestionData }
)(SuggestionTbl);
