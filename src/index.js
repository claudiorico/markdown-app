import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal d-block" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content custom-modal-dialog">
            <div className="modal-header custom-modal-header">
              <h5 className="modal-title">
                <i className="fa fa-free-code-camp"></i>Editor
              </h5>
              <i className="fa fa-arrows-alt"></i>
            </div>

            <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div
          className="modal-dialog modal-dialog-scrollable"
          style="max-width: 800px"
        >
          <div className="modal-content">
            <div className="modal-header custom-modal-header">
              <h5 className="modal-title">
                <i className="fa fa-free-code-camp"></i>Previewer
              </h5>
              <i className="fa fa-arrows-alt"></i>
            </div>
            <div className="modal-body" id="modal-body"></div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
