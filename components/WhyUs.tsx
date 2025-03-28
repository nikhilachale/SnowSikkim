export default function WhyUs() {
    return (
        <div className="bg-white rounded-2xl shadow-lg w-screen p-8 text-center">
            <h2 className="text-2xl font-bold mt-7">Why Choose Us?</h2>
            <h4 className="text-lg  text-gray-500 font-semibold mt-2">What makes us different from other tour package companies.</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h5 className="text-gray-900 text-xl font-bold">Best Travel Experts</h5>
                    Our travel experts have core and intense knowledge about Sikkim sector with over 10 years of experience that will help you choose the best possible itinerary as per your requirements.
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h5 className="text-gray-900 text-xl font-bold">24 X 7 On-Trip Assistance</h5>
                    Our travel experts are just one call away during your tour to help you with any kind of immediate assistance so that your tour is a more enjoyable and hassle-free tour.
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h5 className="text-gray-900 text-xl font-bold">Best Rate Guarantee</h5>
                    eSikkim Tourism ensures best rates to all our esteemed guests since we have our own hotels and fleet of vehicles and drivers and there is no third-party involvement. This ensures personalized service and best rates.
                </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-8 hover:bg-red-600">
                Learn More
            </button>
        </div>
    );
}
