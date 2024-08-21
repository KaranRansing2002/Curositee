import Bag from "@/components/custom/Bag";
import ProdImage from "@/components/custom/ProdImage";
import { offers } from "@/data/proddData";
import {productDiscription } from "@/services/product";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const ProductDesc = () => {
	const { index } = useParams();
	const [data, setProductData] = useState(null);
	const [size, setSize] = useState();
	const [showResult, setShowResult] = useState(false);

	const [bagImage,setBagImage] = useState(null);
    
	useEffect(() => {
		if (index) {
			const fetchData = async () => {
				if(index){
					const response = await productDiscription(index);
					console.log(response);
					setProductData(response);
					setBagImage(response.imgIds[0])
				}
			}
			fetchData();
		}
	}, [index]);

	const handleCheck = () => {
		setShowResult(true);
	};

	if (!data) {
		return <p>Loading...</p>;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 p-2">
			<div className="p-2">
				<ProdImage
				  images={data.imgIds}
				  Index={index}
				  setBagImage={setBagImage}
				 />
			</div>
			<div className="p-4 flex flex-col gap-6"
				style={{
					maxHeight: '904px',
					overflowY: 'auto',
					scrollbarWidth: 'none',
					msOverflowStyle: 'none',
				}}>
				<div>
					<h1 className="Futura text-3xl flex justify-center items-center md:flex md:justify-start md:items-start pb-2">
						{data.prod.productName} - {data.prod.categoryName}
					</h1>
					<div className="rating float-start">
						{[1, 2, 3, 4, 5].map((value) => (
							<input
								key={value}
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-yellow-400 scale-75 cursor-auto"
								checked={value === data.rating}
								readOnly
							/>
						))}
					</div>
				</div>

				<div className="flex flex-col items-center md:flex-col md:items-start">
					<h1 className="Twentieth-Century text-base md:text-xl leading-6 text-center md:text-left" style={{ color: "#1c1d1d" }}>INR {data.prod.price}</h1>
					<h1 className="text-sm leading-5 text-center md:text-left">(inc. of all taxes)</h1>
				</div>

				<div className="grid gap-2 text-left">
					{offers.map((offer, idx) => (
						<div key={idx} className="flex gap-2 items-center">
							<img src="https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278" alt="offer-icon" />
							<div className="items-center">
								<p className="Twentieth-Century">
									Get this for <span className="font-bold">INR {Math.floor(offer.ratio * data.prod.price)}</span>
								</p>								<p className="Twentieth-Century">{offer.desc}</p>
								<p className="Twentieth-Century">{offer.code}</p>
							</div>
						</div>
					))}
				</div>
				<hr />

				<div className="flex-col gap-4 sm:gap-4 justify-center items-center md:flex md:justify-start md:items-start">
					<div className="gap-2">
						{/* <SimilarProd prods={data.similarProds} /> */}
					</div>
					<div className="text-center md:text-left">
						<p className="pb-3 pt-3">SELECT A SIZE</p>
						<div className="flex flex-wrap gap-3 justify-center md:justify-start">
							{data.sizes.map((Size, idx) => (
								<div key={idx} className="flex gap-2 items-center">
									<div onClick={() => setSize(Size)} className="items-center h-8 w-8 border border-black rounded cursor-pointer">
										<p className={size === Size ? "Twentieth-Century flex justify-center items-center h-full text-xl cursor-pointer bg-black text-green-400" : "Twentieth-Century flex justify-center items-center h-full text-xl cursor-pointer hover:bg-black hover:text-white"}>{Size}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>
					<img className="h-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ23SZXYidHA1WCt0pf3bzrYmNP95A1lHs7Q&s" alt="size-chart" />SIZE CHART</button>
				<dialog id="my_modal_4" className="modal">
					<div className="modal-box w-11/12 h-[450px] max-w-4xl p-2 pt-4">
						<p className="text-center">{data.title}</p>
						<h6 className="text-center text-xs">Size Charts</h6>
						<hr className="bold-hr" />
						<form method="dialog">
							<button className="btn btn-sm btn-circle btn-ghost absolute right-1 sm:right-2 top-2">✕</button>
						</form>
						<div className="h-full w-full p-2 mt-4">
							<div className="p-1">
								<p>T-SHIRT SIZE CHART</p>
							</div>
							<table className="table max-w-full mt-2 ">
								<tr className="hover:bg-slate-100">
									<th></th>
									<th>CHEST</th>
									<th>SHOULDER</th>
									<th>LENGTH</th>
								</tr>
								<tbody>
									<tr className="hover:bg-slate-100">
										<th className="hover:bg-slate-300">S</th>
										<td className="hover:bg-slate-300">38</td>
										<td className="hover:bg-slate-300">16</td>
										<td className="hover:bg-slate-300">27</td>
									</tr>
									<tr className="hover:bg-slate-100">
										<th className="hover:bg-slate-300">M</th>
										<td className="hover:bg-slate-300">40</td>
										<td className="hover:bg-slate-300">16.5</td>
										<td className="hover:bg-slate-300">28</td>
									</tr>
									<tr className="hover:bg-slate-100">
										<th className="hover:bg-slate-300">L</th>
										<td className="hover:bg-slate-300">42</td>
										<td className="hover:bg-slate-300">17</td>
										<td className="hover:bg-slate-300">29</td>
									</tr>
									<tr className="hover:bg-slate-100">
										<th className="hover:bg-slate-300">XL</th>
										<td className="hover:bg-slate-300">44</td>
										<td className="hover:bg-slate-300">17.5</td>
										<td className="hover:bg-slate-300">30</td>
									</tr>
									<tr className="hover:bg-slate-100">
										<th className="hover:bg-slate-300">XXL</th>
										<td className="hover:bg-slate-300">46</td>
										<td className="hover:bg-slate-300">18</td>
										<td className="hover:bg-slate-300">31</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</dialog>

				<Bag size={"M"} data={data} bagImage={bagImage} />

				<button className="btn bg-white text-black border border-black" onClick={() => document.getElementById('my_modal_3').showModal()}>
					<img className="h-4" src="https://cdn.icon-icons.com/icons2/2761/PNG/512/love_heart_icon_176421.png" alt="wishlist-icon" />
					Add To Wishlist</button>
				<dialog id="my_modal_3" className="modal p-4 h-[1000px]">
					<div className="modal-box flex flex-col items-center justify-center sm:w-full sm:h-1/2 border border-black">
						<form method="dialog">
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
						</form>
						<img className="h-10 sm:h-10" src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png" alt="email-icon" />
						<h1 className="text-black sm:p-4 font-semibold text-lg text-center">What's Your Email?</h1>
						<input type="email" placeholder="Email Address" className="border h-[40px] w-full sm:w-[350px] sm:h-[50px] md:h-[45px] md:w-[400px] md:text-lg" />
						<button className="btn bg-black text-white mt-6">Add To Wishlist</button>
					</div>
				</dialog>

				<div>
					<div className="join join-vertical w-full">
						<div className="collapse collapse-arrow join-item border-base-300 border">
							<input type="checkbox" name="my-accordion-4" defaultChecked />
							<div className="collapse-title text-xl font-medium">EMI / PAY IN 3 OFFERS</div>
							<div className="collapse-content">
								<p>or Pay ₹333 and rest later via No Charges | upto Rs.200 discount or 3 monthly payments of ₹333 FLAT Cashback ₹250
									Or 3 interest free payments of ₹333
								</p>
							</div>
						</div>
						<div className="collapse collapse-arrow join-item border-base-300 border">
							<input type="checkbox" name="my-accordion-4" />
							<div className="collapse-title text-xl font-medium">DESCRIPTION</div>
							<div className="collapse-content">
								<p>{data.prod.productDesc}</p>
							</div>
						</div>
						<div className="collapse collapse-arrow join-item border-base-300 border relative z-10">
							<input type="checkbox" name="my-accordion-4" />
							<div className="collapse-title text-xl font-medium">RETURNS & EXCHANGER INFORMATION</div>
							<div className="collapse-content">
								<p>1.Hassle-free returns within 7 days; specific conditions apply based on products and promotions.
									Prepaid order refunds are processed to the original payment method; COD orders receive a coupon code refund.
									Issues with defective, incorrect, or damaged products must be reported within 24 hours of delivery.
									Items purchased during special sales with free product offers, like BOGO, are ineligible for returns.
									A reverse shipment fee of Rs 100 is charged, which will be deducted from the refund.
									For hygiene, items such as accessories, sunglasses, perfumes, masks, and innerwear are non-returnable.
									For more details on our Return / Exchange Policies, please click here․
									To place a Return / Exchange Request, click here.</p>
							</div>
						</div>
					</div>
				</div>

				<div className=" border rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-md p-4 hover:shadow-lg">
					<label className="form-control w-full">
						<div className="label pb-4">
							<span className="label-text">Estimated Delivery Date & COD Checker
							</span>
						</div>
						<div className="flex flex-col w-full sm:flex-row">
							<input
								type="text"
								placeholder="Enter your pincode"
								className=" input input-bordered mb-2 sm:mr-4 text-white"
							/>
							<button
								className="btn btn-primary bg-black hover:bg-black text-white"
								onClick={handleCheck}
							>
								Check
							</button>
						</div>

						{showResult && (
							<div className="label mt-1 flex flex-col items-start">
								<span className="label-text-alt flex">
									<img className="h-4 mr-2" src="https://cdn-icons-png.flaticon.com/512/3143/3143267.png" />
									<p className="mr-1">Expect delivery by</p><p className="text-green-500">{data.date}</p>
								</span>
								<span className="label-text-alt flex">
									<img className="h-4 mr-2" src="https://cdn-icons-png.flaticon.com/512/4470/4470504.png" /><p className="mr-1">Cash on delivery</p> (<p className="text-green-500">available</p>)
								</span>
							</div>
						)}
					</label>
				</div>

			</div>
		</div>
	);
};

export default ProductDesc;