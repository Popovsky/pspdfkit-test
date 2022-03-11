import React, { Component } from "react";
import PdfViewerComponent from './components/pspdfkit';
import "./App.css";
import RenderInWindow from './components/RenderInWindiw';
import NewTab from './components/NewTab';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      document: "example.pdf",
    };
    this.openAnother = this.openAnother.bind(this);
  }

  openAnother() {
    this.setState({
      document: "another-example.pdf",
    });
  }

  render() {
    return (
      // <RenderInWindow>
      <NewTab/>
        // <PdfViewerComponent
        //   document={"http://localhost:3000/api/files/ac08a313-95c7-4026-90dd-c6630bec6cd8"}
        // />
      // </RenderInWindow>
    );
  }
}

export default App;
