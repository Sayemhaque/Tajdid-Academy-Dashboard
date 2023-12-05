import Header from "./Header";
import InputField from "../../components/InputField/InputField";
import PhotoUpload from "./PhotoUpload";
import Label from "../../components/Label/Label";
import { useForm } from "react-hook-form";



const CreateProduct = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <section className="w-[1096px]">
            <Header onSubmit={handleSubmit(onSubmit)} />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-8 mt-16 space-y-12">
                <div className="flex gap-72">
                    <Label content={"Title"} />
                    <InputField
                        register={register}
                        name="title"
                        type="text"
                        placeholder="Title" />

                </div>
                <div className="flex gap-72">
                    <Label content={"Price"} />
                    <InputField
                        register={register}
                        name="price"
                        type="Number"
                        placeholder="Price" />
                </div>
                <PhotoUpload />
                <div className="flex gap-16">
                    <div>
                        <Label content={"Photo"} />
                        <p className="text-sm text-gray-400">This will be displayed on your product</p>
                    </div>
                    <div>
                        <textarea
                            {...register("description")}
                            cols="50" rows="5"
                            className="border border-[#D0D5DD] rounded-md focus:outline-none p-2"
                            placeholder=" write something about your product..">
                        </textarea>
                        <p>275 character left</p>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CreateProduct;

//Form and form data need
//fuction need to submit

