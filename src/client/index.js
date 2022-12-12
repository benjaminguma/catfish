import { app } from "../firebase";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
const db = getFirestore(app);
const COLL_NAME = "pins";
export const uploadData = async ({ pin, ...rest }) => {
	await verifyPin(pin);
	try {
		const docRef = doc(db, COLL_NAME, pin);
		await updateDoc(docRef, { ...rest, used: true });
		return true;
	} catch (error) {
		console.log(error);
	}
};

export const verifyPin = async (pin = "01e0Or04g") => {
	try {
		const docRef = doc(db, COLL_NAME, pin);
		const res = await getDoc(docRef);
		console.log(res.data());
		return res.data();
	} catch (error) {
		console.log(error);
		return false;
	}
};
