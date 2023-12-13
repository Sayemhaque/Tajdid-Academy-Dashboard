import Header from "./Header";
import InputField from "../../components/InputField/InputField";
import PhotoUpload from "./PhotoUpload";
import Label from "../../components/Label/Label";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../../components/Loading/Error";
import { Inputs } from "../../Model/types";
import TextArea from "../../components/TextArea/TextArea";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: Inputs) => {
      return axios.post("https://fakestoreapi.com/products", data);
    },
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "product created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  if (isError) {
    return <Error message={error.message} />;
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <section>
      <Header isPending={isPending} onSubmit={handleSubmit(onSubmit)} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-8 py-8 mt-16 space-y-11"
      >
        <div className="grid grid-cols-3 gap-12">
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
        <div className="grid grid-cols-3 gap-12">
          <Label content={"Price"} />
          <div>
            <InputField
              register={register}
              name="price"
              type="number"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-400 py-1">This field is required</p>
            )}
          </div>
        </div>
        <PhotoUpload />
        <div className="grid grid-cols-3 gap-12">
          <div>
            <Label content={"Description"} />
            <p className="text-sm font-medium text-[#475467]">
              write a short description
            </p>
          </div>
          <div>
            <TextArea register={register} />
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
