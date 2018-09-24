import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../Common/EmotionBarChart.css";
import Prototypes from "prop-types";
import { connect } from "react-redux";
import { fetchSuccessData } from "../../actions/successRateAction";

class SuccessRate extends Component {
  componentWillMount() {
    this.props.fetchSuccessData();
  }
  render() {
    return (
      <div className="root">
        <Grid container spacing={22}>
          <h4
            style={{
              textIndent: 20,
              fontSize: 20,
              color: "blue",
              textAlign: "justify"
            }}
          >
            Success Rate
          </h4>
          <Grid item xs={12}>
            <Paper className="paperSuccess">
              <div className="fixed">
                <h3>
                  Based on Post Details :
                  <span style={{ color: "blue" }}>
                    {" "}
                    {this.props.successData.postDetail}
                  </span>
                </h3>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="paperSuccess">
              <div className="fixed">
                <h3>
                  Based on Emotion Details :
                  <span style={{ color: "blue" }}>
                    {" "}
                    {this.props.successData.emotionDetail}
                  </span>
                </h3>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SuccessRate.propTypes = {
  fetchSuccessData: Prototypes.func.isRequied,
  successData: Prototypes.array.isRequired
};

const mapStateToProps = state => ({
  successData: state.success.item
});

export default connect(
  mapStateToProps,
  { fetchSuccessData }
)(SuccessRate);
