import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-red-700 mt-3 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Section: Get in Touch and CABBro */}
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

            <p className="text-black mb-2">Email us at:</p>
            <p className="text-red-400">
              <a href="mailto:thecabbro@gmail.com">SnowSikkim@gmail.com</a>
            </p>

            <p className="text-black mb-2 mt-4">Call us at:</p>
            <p className="text-red">
              <a href="tel:+919111034494">+91 9111034494</a>
            </p>

            <p className="text-black mb-2 mt-4">Address</p>
            <p className="text-red-400">
MG Marg, Gangtok, Sikkim - 737101
            </p>
          </div>

          <div className="sm:ml-auto mt-6 sm:mt-0 w-1/3 text-left">
            <h3 className="text-lg font-semibold mb-3">
            Snow Sikkim
            </h3>
            <p className="text-sm text-black">
              <strong>"Snow Sikkim"</strong> offers affordable, reliable, and comfortable cab services for city and long-distance travel. With a well-maintained fleet and professional drivers, we ensure every ride is safe and pleasant, prioritizing customer satisfaction at every step.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-black mt-8">
          <p>&copy; {new Date().getFullYear()} Snow Sikkim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;