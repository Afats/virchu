import React from "react";
import Sidebar from "react-sidebar";
import ReactDOM from 'react-dom';
import World from "./globe_comp";
import d from "./dataHolder"


export class leftData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: d.setData()
    };

    // this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: d.setData()});
  }



  render() {
    return (
      <Sidebar
        sidebar={<div>
        <h2>News</h2>
        <hr></hr>
        <table style = {{color: "black"}}>{this.props.data}</table>
        <br></br>
        <br></br>
        <h2>Charities</h2>
        <hr></hr>
        {this.props.cData}
        <button style={{backgroundColor:"#FFFFFF", width:"100%"}} onClick={() => {d.getData(false)}}><p></p>
        </button>
        </div>}
        open={this.state.sidebarOpen}
        //open={this.props.openVal}

        onSetOpen={this.onSetSidebarOpen}
        styles={{
                sidebar: {
                position: "fixed",
                height: 600,
                width: 390,
                padding: 12,
                background: "white",
                top: 250,
                left: 1400,
                zIndex: 3

            }
        }}
        pullLeft={true}
        data={d.theData()}
      >
      </Sidebar>
    );
  }
}

export default leftData;
