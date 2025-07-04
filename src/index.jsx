import React from "react";
import { Container } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

const myFlixApplication = () => {
  return (
    <Container className="Container">
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(React.createElement(myFlixApplication));