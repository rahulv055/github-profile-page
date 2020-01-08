import React from 'react';
import { Row, Col, Tabs, Input } from 'antd';
import Profile from './ProfileComponent/Profile.component';
import Repository from './RepositoryComponent/Repository.components'

import './App.css';

const { TabPane } = Tabs;

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Profile />
        </div>
        <div style={{ flex: 3 }}>
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Overview" key="1">
                Content of Tab Pane 1
             </TabPane>
              <TabPane tab="Repositories" key="2">
                <Repository />
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
            </TabPane>
            </Tabs>
          </div>

          <div>

          </div>

        </div>
      </div>

      {/* <Profile/> */}

    </div>
  );
}

export default App;
