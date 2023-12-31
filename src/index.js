import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<SnackbarProvider
				maxSnack={3}
				autoHideDuration={2000}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
			>
				<App />
			</SnackbarProvider>
		</BrowserRouter>
	</React.StrictMode>
);
