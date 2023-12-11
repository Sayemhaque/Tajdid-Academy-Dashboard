import Header from "./Header";
import InputField from "../../components/InputField/InputField";
import PhotoUpload from "./PhotoUpload";
import Label from "../../components/Label/Label";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationFn: (data) => {
      return axios.post("https://fakestoreapi.com/products", data);
    },
  });

  const onSubmit = (data) => {
    console.log(data, errors, isSuccess);
    mutate(data);
    reset();
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "product created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess]);

  return (
    <section>
      <Header isPending={isPending} onSubmit={handleSubmit(onSubmit)} />
      {/* error message */}
      {isError && (
        <p className="mt-5 pr-8 text-right text-red-500">{error.message}</p>
      )}
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-8 mt-16 space-y-11">
        <div className="grid grid-cols-3">
          <Label content={"Title"} />
          <div>
            <InputField
              register={register}
              name="title"
              type="text"
              placeholder="Title"
            />
            {errors.title && (
              <p className="text-red-400 py-1">This field is required</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3">
          <Label content={"Price"} />
          <div>
            <InputField
              register={register}
              name="price"
              type="Number"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-400 py-1">This field is required</p>
            )}
          </div>
        </div>
        <PhotoUpload />
        <div className="grid grid-cols-3">
          <div>
            <Label content={"Photo"} />
            <p className="text-sm text-gray-400">
              This will be displayed on your product
            </p>
          </div>
          <div>
            <textarea
              {...register("description", { required: true })}
              cols="50"
              rows="5"
              className="w-[512px] border border-[#D0D5DD] rounded-md focus:outline-none p-2"
              placeholder=" write something about your product.."
            ></textarea>
            <p>275 character left</p>
            {errors.description && (
              <p className="text-red-400 py-1">This field is required</p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateProduct;

//Form and form data need
//fuction need to submit
