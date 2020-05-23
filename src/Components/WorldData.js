import React, { Component } from "react";

import * as styles from "./utils/Styles";
import Chart from "./Chart";

import Loader from "react-loader-spinner";

export class WorldData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worldData: {},
      updatedTime: "",
      isChartShown: false,
      showCharts: false,
      data: [],
    };
  }

  componentDidMount() {
    const worldDataApi = "https://disease.sh/v2/all";
    fetch(worldDataApi)
      .then((res) => res.json())
      .then((worldData) => {
        const updatedDate = new Date(worldData.updated).toUTCString();
        this.setState({ worldData: worldData, updatedTime: updatedDate });
      });
    const apiLink = "https://disease.sh/v2/historical/all?lastdays=30";
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        let cases = Object.values(data.cases);
        let recovered = Object.values(data.recovered);
        let deaths = Object.values(data.deaths);
        let dates = Object.keys(data.cases);

        let datas = [];
        for (let i = 0; i < dates.length; i++) {
          let newData = {
            date: "",
            cases: "",
            deaths: "",
            recovered: "",
          };
          newData["date"] = dates[i];
          newData["cases"] = cases[i];
          newData["recovered"] = recovered[i];
          newData["deaths"] = deaths[i];
          // console.log(i, newData);
          datas.push(newData);
        }
        // console.log("chartData", datas);
        this.setState({ data: datas });
      });
  }

  render() {
    // console.log(this.state.worldData);
    return (
      <div>
        <styles.WorldDataWrapper>
          <styles.MainHeading>World Statistics</styles.MainHeading>
          <h6 style={{ color: "#f7f7f7" }}>
            Last Updated:{" "}
            {this.state.updatedTime ? (
              <span>{this.state.updatedTime}</span>
            ) : (
              <span>
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={20}
                  width={20}
                />
              </span>
            )}
          </h6>
          <styles.DataWrapper>
            <div>
              Total Cases: <br />
              {this.state.worldData.cases ? (
                <span>{this.state.worldData.cases.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
            <div>
              Total Deaths: <br />
              {this.state.worldData.cases ? (
                <span>{this.state.worldData.deaths.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
            <div>
              Total recovered: <br />
              {this.state.worldData.recovered ? (
                <span>{this.state.worldData.recovered.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
            <div>
              Total Active Cases: <br />
              {this.state.worldData.active ? (
                <span>{this.state.worldData.active.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
          </styles.DataWrapper>
          <styles.DataWrapper>
            <div>
              Total Tests: <br />
              {this.state.worldData.cases ? (
                <span>{this.state.worldData.tests.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
            <div>
              Total Deaths Today: <br />
              {this.state.worldData.cases ? (
                <span>{this.state.worldData.todayDeaths.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
            <div>
              Critical Cases: <br />
              {this.state.worldData.recovered ? (
                <span>{this.state.worldData.critical.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
            <div>
              New Cases Today: <br />
              {this.state.worldData.active ? (
                <span>{this.state.worldData.todayCases.toLocaleString()}</span>
              ) : (
                <span>
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={40}
                    width={40}
                  />
                </span>
              )}
            </div>
          </styles.DataWrapper>
          <styles.Button
            title="Last 30 days"
            onClick={() =>
              this.setState((prevState) => {
                return {
                  showCharts: !prevState.showCharts,
                  isChartShown: !prevState.isChartShown,
                };
              })
            }>
            {this.state.isChartShown
              ? "Hide Graphical Data"
              : "View Data Graphically"}
          </styles.Button>
          {this.state.showCharts ? <Chart data={this.state.data} /> : null}
        </styles.WorldDataWrapper>
      </div>
    );
  }
}

export default WorldData;
