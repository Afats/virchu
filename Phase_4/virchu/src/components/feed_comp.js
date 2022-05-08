import React from "react";
import Sidebar from "react-sidebar";
import {TwitterTweetEmbed} from 'react-twitter-embed';
import d from "./dataHolder";

 
const mql = window.matchMedia(`(min-width: 800px)`);
 
class feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: d.setData()
    };
    

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  
  render() {
    return (
      <Sidebar
        sidebar={<div>
          <div style={{ height: 100 }}></div>
          <TwitterTweetEmbed tweetId={'1382261873068937216'}/>
          <TwitterTweetEmbed tweetId={'1363080846622814211'}/>
          <TwitterTweetEmbed tweetId={'1284127434745536513'}/>
          <TwitterTweetEmbed tweetId={'1234527147093524482'}/>
          <TwitterTweetEmbed tweetId={'1384089428855955456'}/>
          <TwitterTweetEmbed tweetId={'1382261876113936389'}/>
          </div>
        }
        open={this.state.sidebarOpen}
        
     
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" , position: "fixed", left: 1400}}}
        pullRight={true}
      >
        <div class="col-md-3 offset-md-8">
        <button class="btn btn-outline-primary" type="button" style={{marginTop: "22px", marginLeft: "60px" , position: "fixed", zIndex: '2147483647', borderRadius: 8}} onClick={() => this.onSetSidebarOpen(true)}>
          Toggle Twitterfeed
        </button>
        </div>
        
      </Sidebar>
    );
  }
}
 
export default feed;