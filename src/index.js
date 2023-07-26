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
				autoHideDuration={1000}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
			>
				<App />
			</SnackbarProvider>
		</BrowserRouter>
	</React.StrictMode>
);
