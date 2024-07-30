//text,number,email,password,url,file,date,time,datetime-local,hidden,submit,reset,button,radio,checkbox
import { useController, Controller } from "react-hook-form";
import { INPUT_TYPE, ITextInputComponent,ISelectProps, IFileInputComponent } from "./input.contract";
import Select from "react-select";
import { FaPaperPlane } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";
import { useState } from "react";
export const TextInputComponent = ({
  type = INPUT_TYPE.TEXT,
  defaultValue = "",
  control,
  name,
  msg,
}: ITextInputComponent) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
    rules:{
      required:true
    }
  });
  return (
    <>
      <input
        type={type}
        id={name}
        {...field}
        //onChange={handleChange}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
      <span className="text-sm italic text-red-700">{msg}</span>
    </>
  );
};

export const TextAreaInputComponents = ({
  control,
  defaultValue = "",
  name,
  msg,
}: ITextInputComponent) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
  });
  return (
    <>
      <textarea
        id={name}
        rows={4}
        {...field}
        className="resize-none mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm "
      ></textarea>
      <span className="text-sm italic text-red-700">{msg}</span>
    </>
  );
};

export const RoleSelector = ({
  control,
  name,
  defaultValue,
  msg,
}: ITextInputComponent) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({field:{onChange}}) => (
          <select
            id={name}
            onChange={onChange}
            className=" mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          >
            <option value="Customer">Buyer</option>
            <option value="seller">Seller</option>
            
            </select>
        )}
      />
      <span className="text-sm italic text-red-700">{msg}</span>
    </>)
}
export const SelectComponent=({options,name,control,defaultValue,msg,multiple=false}:ISelectProps)=>{
  const {field}= useController({
    control:control,
    name:name,
    defaultValue:defaultValue
  })
  return(
    <>
    <Select 
    options={options} 
    {...field} 
    isMulti={multiple}
    isClearable
     />
    <span className="text-sm italic text-red-700">{msg}</span>
    </>
  )
}

export const StatusSelector=({control,name,defaultValue,msg}:ITextInputComponent)=>{

  return (<>
     <SelectComponent 
     options={[{label:"Publish",value:"active"},{label:"Unpublish",value:"iactive"}]}
      control={control}
      name={name}
      defaultValue={defaultValue}
      msg={msg}
     ></SelectComponent>
            
  </>)
}

export const SingleImageUpload=({name,setValue,msg}:IFileInputComponent)=>{
  const [thumb,setThumb]=useState();
  return(
    <>
<div className="flex flex-roe ">
<div className="w-3/4 me-3">
<input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id={name}
                    type="file"
                    name={name}
                    accept="image/*"
                    onChange={(e:any) => {
                      e.preventDefault();
                      const name = e.target.name;
                      const image = e.target.files[0];
                      setValue(name, image);
                      setThumb(image);
                    }}
                  />
</div>
                 <div className="w-1/4">
                 <img className="w-full" src={thumb && typeof thumb==='object' ? URL.createObjectURL(thumb) :'https://placehold.co/400x150?text=Image+not+found'} alt="Image"/>

                 </div>
</div>
                  <span className="text-sm italic text-red-700">
                    {msg as string}
                  </span>
    </>
  )
}

export const SubmitButton=({btnTxt,loading=false}:{btnTxt:String,loading:boolean})=>{
  return(
    <>
       <button 
       type="submit" 
       disabled={loading}
       className="mx-3 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
              <FaPaperPlane className="me-3"></FaPaperPlane>
              {btnTxt}
          </button>
    </>
  )
}

export const CancelButton=({btnTxt,loading=false}:{btnTxt:String,loading:boolean})=>{
  return(
    <>
       <button 
       type="reset" 
       disabled={loading}
       className="me-3 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
              <FaUndo className="me-3"></FaUndo>
              {btnTxt}
          </button>
    </>
  )
}