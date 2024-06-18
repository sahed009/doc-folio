import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStethoscope,
	faSyringe,
	faPills,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";



const serviceList = [
	{
		icon: faStethoscope,
		title: "General Health Check-Ups",
		description:
			"Comprehensive examinations to assess overall health and detect potential issues early.",
	},
	{
		icon: faPills,
		title: "Diagnosis and Treatment of Common Illnesses",
		description:
			"Identify and treat common illnesses like infections, colds, and flu with appropriate medications.",
	},
	{
		icon: faSyringe,
		title: "Preventive Health Care and Vaccinations",
		description:
			"Provide vaccinations and screenings to prevent diseases and promote long-term health.",
	},
];

const ServiceItem = ({ service }) => (
	<div className="bg-white  shadow-xl rounded-2xl p-6 pb-12 h-full" data-aos="flip-down">
		<div className="w-20 h-20 rounded-full text-3xl flex items-center justify-center -mt-16 bg-white  shadow-2xl text-primary">
			<FontAwesomeIcon icon={service.icon} />
		</div>

		<div className="mt-6">
			<h4 className="text-2xl font-medium mb-4">{service.title}</h4>
			<p className="opacity-80">{service.description}</p>
		</div>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Services = () => {
	return (
		<section id="services" className="py-14 md:py-24 bg-white  text-zinc-900  relative z-[1] overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="absolute top-16 right-0 bottom-16 left-1/2 lg:left-[60%] rounded-l-[30px] bg-primary bg-opacity-40 w-[100vw] -z-[1]" />
				<div className="w-full max-w-xl mb-12">
					<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
						Services We Have
					</h2>
					<p className="text-lg opacity-80 mb-6">
						Good void fruitful us unto brought firmament, in upon, spirit rule
						face. Forth created good let you'll years heaven above.
					</p>
				</div>

				<div className="grid grid-cols-3 gap-6 gap-y-24 md:gap-y-0 mt-20 max-w-7xl mx-auto">
					{serviceList.map((service, i) => (
						<div className="col-span-3 md:col-span-1" key={i}>
							<ServiceItem service={service} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
