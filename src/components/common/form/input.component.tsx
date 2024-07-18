//text,number,email,password,url,file,date,time,datetime-local,hidden,submit,reset,button,radio,checkbox
import { useController, Controller } from "react-hook-form";
import { INPUT_TYPE, ITextInputComponent } from "./input.contract";
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
    </>
  );
};
