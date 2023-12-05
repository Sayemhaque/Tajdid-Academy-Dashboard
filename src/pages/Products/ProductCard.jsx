import Rating from "react-rating";
import { FiStar } from "react-icons/fi"
import { FaStar, FaTrashAlt } from "react-icons/fa"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    const { id, title, price, rating, image } = product;
    const [productId, setProductId] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const { mutate, isSuccess, isError, error,isPending} = useMutation({
        mutationFn: (id) => {
            return axios.delete(`https://fakestoreapi.com/products/${id}`)
        }
    })
    const handleOnClose = () => {
        setShowModal(false)
    }

    //show modal and get the productId
    const handleShowModal = (id) => {
        setShowModal(true)
        setProductId(id)
    }

    // delete product
    const handleDelete = () => {
        mutate(productId)
        console.log(isError, isSuccess, error?.message)
    }

    useEffect(() => {
        if (isSuccess) {
            setShowModal(false)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "product Deleted successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [isSuccess]);

    return (
        <article className="border border-gray-200 p-3">
            <img
                src={image}
                alt=""
                className="w-[200px] h-[200px] mx-auto"
            />
            <div className="space-y-2">
                <p className="text-md font-bold mt-3">${price}</p>
                <div className="flex justify-between items-center">
                    <div >
                        {/* rating */}
                        <Rating
                            readonly
                            placeholderRating={rating.rate}
                            emptySymbol={<FiStar className="text-[#FF9017] text-md" />}
                            placeholderSymbol={<FaStar className="text-[#FF9017] text-md" />}
                        />
                        <span className="text-[#FF9017] text-md font-bold ml-1">{rating.rate}</span>
                    </div>
                    <FaTrashAlt onClick={() => handleShowModal(id)} className="text-[#E50000] cursor-pointer" />
                </div>
                <p className="text-sm text-[#606060]">{title}</p>
            </div>
            <Modal isPending={isPending} onClick={handleDelete} handleOnClose={handleOnClose} visible={showModal} />
        </article>
    );
};

export default ProductCard;