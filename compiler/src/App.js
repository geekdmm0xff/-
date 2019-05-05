import React, { Component } from "react";
import * as bootstrap from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <bootstrap.TabPane>
        <bootstrap.Alert variant="secondary">
          GeekDuan の 自制编译器
        </bootstrap.Alert>
        <bootstrap.FormGroup>
          <bootstrap.FormControl
            as="textarea"
            style={{ height: 480 }}
            placeholder="Enter your code"
          />
        </bootstrap.FormGroup>
        <bootstrap.Button bsstyle="danger" style={{ width: 100 }}>
          运行
        </bootstrap.Button>
      </bootstrap.TabPane>
    );
  }
}

export default App;
