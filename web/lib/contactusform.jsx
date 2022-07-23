import React ,{ useState} from 'react'

function ContactUsForm() {


  const [error,setError] = useState(false);
  const [showSuccessMessage,setShowSuccessMessage] = useState(false);
  const [formData,setFormData] = useState({name:null,email:null,comment:undefined});
  
  return (
    <div className=" p-8 pb-12 mb-8 w-full col-span-2 mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea 
          placeholder="Message"
          name="comment"
          className="bg-[#e6e1cb] p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-[#b3af9e] text-" />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
          <input 
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#e6e1cb] px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-[#b3af9e] text-" />

          <input 
          type="text"
          placeholder="Email"
          name="email"
          className="bg-[#e6e1cb] px-4 py-2  outline-none w-full rounded-lg focus:ring-2 focus:ring-[#b3af9e] text-" />
        </div>
        {error && <p className="text-xs pb-4 text-red-500">All fields are required.</p>}
        <div>
          <button 
          type="button" 
          className="transition w-full durarion-500 ease bg-[#b25d56] text-lg font-bold text-slate-200 p-2 rounded-full hover:bg-[#8e4a45]">
            Submit
          </button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold text-green-600 mt-3 "> Comment Submitted!</span>}
        </div>
    </div>
  );
}
export default ContactUsForm