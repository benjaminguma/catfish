import VerifyPin from "./components/VerifyPin";
import Register from "./components/Register";
import Confirm from "./components/Confirm";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { verifyPin } from "./client";

function App() {
	const [tokenData, setTokenData] = useState(null);
	const handleVerify = async (pin) => {
		const res = await verifyPin(pin);

		if (typeof res === "object") {
			setTokenData({ ...res, pin });
		}
	};
	function renderRoutes() {
		if (!!tokenData)
			return (
				<>
					<Route path='/' element={<Register tokenData={tokenData} />}></Route>
					<Route path='/confirm' element={<Confirm />}></Route>
				</>
			);
		return (
			<>
				<Route path='/' element={<VerifyPin handleVerify={handleVerify} />}></Route>
			</>
		);
	}

	return (
		<>
			<div>
				<Routes>{renderRoutes()}</Routes>
			</div>
		</>
	);
}

export default App;
