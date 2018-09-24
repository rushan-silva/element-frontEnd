import React, { Component } from "react";
import SuggestionTbl from "../../components/Table/SuggestionTable";
import EmotionBarChart from "../../components/Chart/EmotionBarChart";
import SuccessRate from "../../components/SuccessRate/SuccessPrediction";
import "./EmotionChart.css";

class EmotionAnalysisView extends Component {
  state = {};
  render() {
    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <div>
          <SuccessRate />
        </div>
        <div>
          <EmotionBarChart />
        </div>
        <div>
          <SuggestionTbl />
        </div>
      </div>
    );
  }
}

export default EmotionAnalysisView;
