import React ,{ useState} from "react";
import { addComment } from "../services";


const CommentForm = ({id}) => {

  const [error,setError] = useState(false);
  const [showSuccessMessage,setShowSuccessMessage] = useState(false);
  const [formData,setFormData] = useState({name:null,email:null,comment:undefined,postid:id});
  

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };



  const handleCommentSubmission = () =>{
    addComment(formData)
    setError(false);
    setShowSuccessMessage(true);
  };


  return (
    <div className="bg-[#fffae2] shadow-lg rounded-lg p-8 pb-12 mb-8 w-full mx-auto  md:w-5/6  lg:w-full lg:mx-0 lg:p-8">
      <h2 className="mb-6 text-lg font-bold text-center">Deixe um comentário</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea 
          value={formData.comment} 
          onChange={onInputChange} 
          placeholder="Comentário"
          name="comment"
          className="bg-[#e6e1cb] p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-[#b3af9e] text-" />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
          <input 
          type="text"
          value={formData.name} 
          placeholder="Nome"
          name="name"
          onChange={onInputChange} 
          className="bg-[#e6e1cb] px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-[#b3af9e] text-" />

          <input 
          type="text"
          onChange={onInputChange} 
          value={formData.email}
          placeholder="Email"
          name="email"
          className="bg-[#e6e1cb] px-4 py-2  outline-none w-full rounded-lg focus:ring-2 focus:ring-[#b3af9e] text-" />
        </div>
        {error && <p className="text-xs pb-4 text-red-500">Todos campos são obrigatórios.</p>}
        <div>
          <button 
          type="button" 
          onClick={handleCommentSubmission}
          className="transition w-full durarion-500 ease bg-[#b25d56] text-lg font-bold text-slate-200 p-2 rounded-full hover:bg-[#8e4a45]">
            Enviar
          </button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold text-green-600 mt-3 "> Comentário enviado!</span>}
        </div>
    </div>
  );
}

export default CommentForm;