import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/Logo.png";
import { genRegNo } from "../helpers";

import { uploadData } from "../client";

const Register = ({ tokenData }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const nav = useNavigate();

	const onRegister = async (data) => {
		data = { ...data, regNo: genRegNo(tokenData.index, data.sodDept), pin: tokenData.pin };
		const res = await uploadData(data);
		if (!!res) {
			nav(`/confirm?state=${btoa(JSON.stringify({ ...tokenData, ...data }))}`, {
				replace: true,
			});
		}
	};

	return (
		<div className='w-screen h-screen bg-white px-7 py-20 flex flex-col items-center'>
			<div className='flex items-center flex-col'>
				<div className='bg-white min-h-full rounded drop-shadow-lg flex justify-center px-4 py-4 md:w-11/12'>
					<div className='container bg-inherit flex flex-col items-center pt-2'>
						<img src={logo} alt='Fcs-Logo' className='h-10 md:h-14 w-auto mb-3' />

						<h3 className='font-workSans uppercase text-xs font-bold md:text-base'>
							His Dwelling Place
						</h3>
						<p className='font-slabo text-sm md:text-sm'>School of Destiny (SOD) '22</p>

						<form onSubmit={handleSubmit(onRegister)} className='mt-10 md:mt-6 w-full p-2'>
							<label htmlFor='' className='font-workSans text-sm '>
								Full Name*
							</label>
							<input
								type='text'
								{...register("fName", { required: true, minLength: 3 })}
								placeholder='Enter Full name here e.g JOHN, Doe'
								className='px-4 py-2 my-2 rounded-sm text-xs md:text-sm font-workSans border outline-transparent font-thin w-full'
							/>
							<div className='md:w-96 pb-3 text-xs text-red-600 italic'>
								{errors.fName?.type === "required" && <p role='alert'>Enter your Full Name</p>}
							</div>

							<label htmlFor='' className='font-workSans text-sm '>
								SOD Department*
							</label>
							<select
								{...register("sodDept", { required: true })}
								className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'
							>
								<option value=''></option>
								<option value='BT'>Biblical theology</option>
								<option value='EA'>erudition and academic exploit</option>
								<option value='WI'>wealth and ionfluence</option>
								<option value='FL'>Family liffe and relationship</option>
								<option value='ID'>Identity and domimion</option>
								<option value='LC'>Leadership and Culture</option>
								<option value='AR'>Arts and entertainment</option>
								<option value='MS'> Mission Apologetic </option>
								<option value='FA'>Faith and the Supernatural</option>
							</select>
							<div className='md:w-96 pb-3 text-xs text-red-600 italic'>
								{errors.sodDept?.type === "required" && (
									<p role='alert'>Please Select a Department</p>
								)}
							</div>

							<div className='flex justify-between'>
								<div>
									<label htmlFor='' className='font-workSans text-sm'>
										Gender*
									</label>
									<select
										{...register("gender", { required: true })}
										className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'
									>
										<option value=''></option>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
									</select>
									<div className='md:w-50 pb-3 text-xs text-red-600 italic'>
										{errors.gender?.type === "required" && (
											<p role='alert'>Select Gender</p>
										)}
									</div>
								</div>

								<div>
									<label htmlFor='' className='font-workSans text-sm'>
										Faculty*
									</label>
									<select
										{...register("faculty", { required: true })}
										className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'
									>
										<option value=''></option>
										<option value='SICT'>SICT</option>
										<option value='SEET'>SEET</option>
										<option value='SAAT'>SAAT</option>
										<option value='SLS'>SLS</option>
										<option value='SIPET'>SIPET</option>
									</select>
									<div className='md:w-50 pb-3 text-xs text-red-600 italic'>
										{errors.faculty?.type === "required" && (
											<p role='alert'>Select Faculty</p>
										)}
									</div>
								</div>

								<div>
									<label htmlFor='' className='font-workSans text-sm'>
										Level*
									</label>
									<select
										{...register("level", { required: true })}
										className='flex my-2 rounded-sm w-full px-4 py-2 border outline-transparent font-thin font-workSans text-sm md:text-sm cursor-pointer'
									>
										<option value=''></option>
										<option value='100'>100</option>
										<option value='200'>200</option>
										<option value='300'>300</option>
										<option value='400'>400</option>
										<option value='500'>500</option>
									</select>
									<div className='md:w-50 pb-3 text-xs text-red-600 italic'>
										{errors.level?.type === "required" && (
											<p role='alert'>Select Level</p>
										)}
									</div>
								</div>
							</div>

							<input
								type='submit'
								value='Register'
								className='bg-blue-400 text-white w-full mt-3 p-2 md:p-3 rounded-sm font-workSans uppercase text-sm cursor-pointer'
							/>
						</form>
					</div>
				</div>
			</div>

			<p className='text-sm font-slabo mt-8 text-slate-500'>&copy; FCS FUTMinna, 2022.</p>
		</div>
	);
};

export default Register;
