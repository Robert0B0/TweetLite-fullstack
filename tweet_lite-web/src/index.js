import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TweetsComponent } from "./tweets";

const appEl = document.getElementById("root");
if (appEl) {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);
}

const tweetsEl = document.getElementById("tweet-lite");
if (tweetsEl) {
	ReactDOM.render(
		<React.StrictMode>
			<TweetsComponent />
		</React.StrictMode>,
		document.getElementById("tweet-lite")
	);
}
