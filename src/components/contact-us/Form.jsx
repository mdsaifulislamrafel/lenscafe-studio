import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import sendEmail from "./sendEmail"; // বাস্তব প্রজেক্টে এটা ইমপোর্ট করো যদি তুমি আলাদা ফাইল বানাও

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // এখানে তোমার sendEmail ফাংশন বসাও
    // sendEmail(data);
    console.log(data); // শুধু দেখানোর জন্য
    // toast.success("Your message has been sent successfully..!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          You Name*
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          {...register("name", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA7E30] focus:border-[#FA7E30]"
        />
        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email*
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA7E30] focus:border-[#FA7E30]"
        />
        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone*
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter Number"
          {...register("phone", { required: true })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA7E30] focus:border-[#FA7E30]"
        />
        {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Message here..."
          {...register("message")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FA7E30] focus:border-[#FA7E30] resize-none h-[120px]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 button_gradeint text-white font-medium rounded-md hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
