import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const header1= React.createElement("h1", {id:"titile"}, "Header1")
const header2= React.createElement("h2", {id:"titile"}, "Header2")

const container= React.createElement("div", {id:"container"}, [header1, header2]);


const root= ReactDOM.createRoot(document.getElementById("root"));


root.render(container)