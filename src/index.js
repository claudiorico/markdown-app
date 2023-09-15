import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MarkdownPreview from "./MarkDownPreview";
import raw from "./initial-text.txt";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: "", preview: "" };

    this.editChange = this.editChange.bind(this);
  }

  editChange(event) {
    console.log(event.target.value);
    this.setState((state) => {
      return { edit: event.target.value };
    });
  }

  componentDidMount() {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        console.log("text decoded:", text);
        this.setState((state) => {
          return { edit: text };
        });
      });
  }

  render() {
    console.log(this.state.edit);
    console.log(this.state.preview);
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

            <textarea
              name="editor"
              id="editor"
              cols="30"
              rows="10"
              value={this.state.edit}
              onChange={this.editChange}
            ></textarea>
          </div>
        </div>
        <div className="modal-dialog modal-dialog-scrollable modal-previewer">
          <div className="modal-content content-previewer">
            <div className="modal-header custom-modal-header">
              <h5 className="modal-title">
                <i className="fa fa-free-code-camp"></i>Previewer
              </h5>
              <i className="fa fa-arrows-alt"></i>
            </div>
            <div className="modal-body" id="preview">
              <MarkdownPreview markdown={this.state.edit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
