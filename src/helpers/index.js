export function genRegNo(index = "", unitAbbr = "") {
	const id = String(index).padStart(3, "0");
	const yr = new Date().getFullYear();
	return `SOD/${yr}/${id}${unitAbbr}`;
}
