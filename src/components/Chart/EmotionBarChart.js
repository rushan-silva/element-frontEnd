import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../Common/EmotionBarChart.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Prototypes from "prop-types";
import { connect } from "react-redux";
import { fetchEmotionData } from "../../actions/chartAction";

class EmotionBarChart extends Component {
  componentWillMount() {
    this.props.fetchEmotionData();
  }

  render() {
    return (
      <div className="root">
        <h4
          style={{
            textIndent: 20,
            fontSize: 20,
            color: "blue",
            textAlign: "justify"
          }}
        >
          Emotion Analysis
        </h4>
        <Grid container spacing={22}>
          <Grid item xs={12} sm={6}>
            <Paper className="paperEmoition">
              <BarChart
                barCategoryGap={10}
                width={650}
                height={360}
                data={this.props.emotionData}
                layout="vertical"
                margin={{ top: 20, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="paperEmoition">
              <div
                style={{ position: "relative", left: 120, top: 25, width: 400 }}
              >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue=""
                  className=""
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className=""
                  style={{ position: "relative", left: 20 }}
                >
                  Classify
                </Button>
              </div>
              <div
                style={{
                  position: "relative",
                  left: 120,
                  top: 100,
                  width: 400,
                  height: 50
                }}
              >
                <text>
                  <center>
                    <span style={{ color: "blue" }}>
                      <strong>aaaaaa</strong>{" "}
                    </span>
                  </center>
                </text>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EmotionBarChart.propTypes = {
  fetchEmotionData: Prototypes.func.isRequied,
  emotionData: Prototypes.array.isRequired,
  newData: Prototypes.object
};

const mapStateToProps = state => ({
  emotionData: state.charts.items,
  newData: state.charts.item
});

export default connect(
  mapStateToProps,
  { fetchEmotionData }
)(EmotionBarChart);
