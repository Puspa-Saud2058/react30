    //text,number,email,password,url,file,date,time,datetime-local,hidden,submit,reset,button,radio,checkbox
import {INPUT_TYPE, ITextInputComponent} from "./input.contract"
export const TextInputComponent = ({type=INPUT_TYPE.TEXT,register,name,msg}:ITextInputComponent) => {
    return (
      <>
        <input
          type={type}
          id={name}
          {...register(name,{required:true})}
          //onChange={handleChange}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        <span className="text-sm italic text-red-700">{msg}</span>
      </>
    );
  };

  export const TextAreaInputComponents=({register,name,msg}:ITextInputComponent)=>{
    return(
      <>
       <textarea
                    id={name}                  
                    {...register(name,{required:true})}
                    rows={4}
                    className="resize-none mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  ></textarea>
                    <span className="text-sm italic text-red-700">{msg}</span>
                  
      
      </>
    )
  }

  export const RoleSelectComponents=({register,name,msg}:ITextInputComponent)=>{
    return(
      <>
        <select
                    id={name}                    
                    {...register(name,{required:true})}
                    className=" mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  >
                    <option value="Customer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                  <span className="text-sm italic text-red-700">{msg}</span>
      </>
    )
  }