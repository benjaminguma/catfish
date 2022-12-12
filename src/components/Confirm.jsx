import React from "react";
import logo from "../assets/Logo.png";
import html2canvas from "html2canvas";

const Confirm = () => {
	const p = new URLSearchParams(window.location.search);

	let chunk = Object.fromEntries(p.entries()); //object.from entries converts arrays to object

	const profile = JSON.parse(atob(chunk.state));
	const generator = (e) => {
		e.preventDefault();

		clearUI();

		console.log({ profile });
		const size = 100;

		showSpinner();

		setTimeout(() => {
			hideSpinner();

			generateQRCode(profile, size);
		}, 1000);
	};

	// Show spinner
	const showSpinner = () => {
		const spinner = document.getElementById("spinner");
		spinner.style.display = "block";
	};

	// Hide spinner
	const hideSpinner = () => {
		const spinner = document.getElementById("spinner");
		spinner.style.display = "none";
	};

	// Generate QR code
	const generateQRCode = (profile, size) => {
		const qrcode = new window.QRCode("qrcode", {
			text: JSON.stringify(profile),
			width: size,
			height: size,
		});
	};

	// Clear QR code and save button
	const clearUI = () => {
		const qr = document.getElementById("qrcode");
		qr.innerHTML = "";
	};

	//Download Ticket function
	const downloadImage = () => {
		html2canvas(document.getElementById("ticket")).then((canvas) => {
			const image = canvas.toDataURL("image/png");
			let anchor = document.createElement("a");
			anchor.setAttribute("href", image);
			anchor.setAttribute("download", "SOD-Ticket.png");
			anchor.click();
			anchor.remove();
		});
	};

	return (
		<div className='h-screen flex justify-center' onLoad={generator}>
			<div className='h-full w-full md:w-6/12'>
				<div className='flex items-center pt-8 px-6 md:pt-16 md:px-10'>
					<img src={logo} alt='Logo' className='h-14 w-auto ' />
					<div className='ml-2 border-b border-slate-300'>
						<h3 className='font-workSans uppercase text-base font-bold md:text-base'>
							His Dwelling Place
						</h3>
						<p className='font-slabo text-base md:text-base'>School of Destiny (SOD) '22</p>
					</div>
				</div>

				<div className='bg-slate-100 mt-8 md:mt-8 p-6 md:mx-10 md:w-909'>
					<h3 className='font-workSans text-2xl font-bold md:text-3xl mb-6'>Allelujah.</h3>
					<p className='font-slabo text-base text-justify md:text-base '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptatem soluta
						similique, dolorem corrupti quasi neque nobis asperiores eaque cumque amet optio eum autem
						totam exercitationem, aliquid beatae doloribus. Maiores.
					</p>
				</div>

				<div className='p-6 md:mx-10 md:px-0'>
					<p className='text-xs md:text-sm font-bold font-workSans text-center'>
						Click The Save button below to download your Ticket*
					</p>

					<div
						id='ticket'
						className='flex justify-between md:justify-between items-center bg-slate-100 rounded-sm mt-3 md:w-full p-3'
					>
						<div className='px-3 md:px-6 '>
							<p className='font-slabo text-base md:text-base md:mb-1'>{profile.fName}</p>
							<p className='font-slabo text-base md:text-base md:mb-1'>{profile.sodDept}</p>
							<p className='font-slabo text-base font-bold md:text-base md:mb-1'>
								{profile.regNo}
							</p>
						</div>

						{/* The Spinner/Loader of the qr code */}
						<div id='spinner' role='status' className='hidden'>
							<svg
								className='inline mr-4 md:mr-6 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400'
								viewBox='0 0 100 101'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
									fill='currentColor'
								/>
								<path
									d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
									fill='currentFill'
								/>
							</svg>
							<span className='sr-only'>Loading...</span>
						</div>

						{/* Qr-code section */}
						<div id='qrcode' className='px-4'></div>
					</div>
				</div>

				<div className='px-6 md:mx-4'>
					<button
						className='bg-blue-400 text-white w-full mt-2 p-2 md:p-3 rounded-sm font-workSans uppercase text-base cursor-pointer md:mt-2'
						onClick={downloadImage}
					>
						Download
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
