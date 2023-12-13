import Rating from "react-rating";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import TrashIcon from "../../assets/icons/Vector.svg";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type PorductId = Number;
const ProductCard = (props: ProductProps) => {
  const { id, title, price, rating, image } = props;
  const [productId, setProductId] = useState<PorductId>(null);
  const [showModal, setShowModal] = useState(false);
  const { mutate, isSuccess, isError, error, isPending } = useMutation({
    mutationFn: (id) => {
      return axios.delete(`https://fakestoreapi.com/products/${id}`);
    },
    onSuccess: () => {
      setShowModal(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const handleOnClose = () => {
    setShowModal(false);
  };

  const handleShowModal = (id) => {
    setShowModal(true);
    setProductId(id);
  };

  const handleDelete = () => {
    mutate(productId);
    console.log(isError, isSuccess, error?.message);
  };

  return (
    <article className="bg-[#FFFFFF] border border-gray-300 rounded-md pt-8">
      <div className="border-b border-gray-300 py-3">
        <img
          src={image}
          alt=""
          className="w-[163px] h-[180px]  object-contain mx-auto"
        />
      </div>
      <div className="py-2">
        <div className="flex justify-between items-center px-5">
          <div className="space-y-2">
            {/* price*/}
            <h5 className="text-lg font-bold mt-2">${price}</h5>
            <div className="flex items-center">
              <Rating
                readonly
                placeholderRating={rating.rate}
                emptySymbol={<FiStar className="text-[#FF9017] text-sm" />}
                placeholderSymbol={
                  <FaStar className="text-[#FF9017] text-sm" />
                }
              />
              <p className="text-[#FF9017] text-[16px] font-semibold ml-2">
                {rating.rate}
              </p>
            </div>
            <p className="text-base font-normal text-[#606060]">
              {title.substring(0, 20)}...
            </p>
          </div>
          <div>
            <div className="border border-gray-300 rounded-md p-2">
              <img
                src={TrashIcon}
                onClick={() => handleShowModal(id)}
                className="w-5 h-5 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isPending={isPending}
        handleDelete={handleDelete}
        handleOnClose={handleOnClose}
        open={showModal}
      />
    </article>
  );
};

export default ProductCard;