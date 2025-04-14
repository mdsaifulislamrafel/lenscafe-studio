import { Check } from "lucide-react";
import Form from "./Form";

const ContactForm = () => {
  return (
    <section className="banner pt-28 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-[#D3D0CE]">
              Feel free to connect with us through our online channels for
              updates, news, and more.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                  <Check size={10} />
                </div>
                <span className="text-[#D3D0CE]">
                  We will respond to you within 24 hours
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                  <Check size={10} />
                </div>
                <span className="text-[#D3D0CE]">
                  We will sign an NDA if requested
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                  <Check size={10} />
                </div>
                <span className="text-[#D3D0CE]">
                  We will assign a dedicated designer for you
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
