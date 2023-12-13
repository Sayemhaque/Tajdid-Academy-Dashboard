import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { CreateProductHeaderProps } from "../../Model/types";

const Header = ({ onSubmit, isPending }: CreateProductHeaderProps) => {
  return (
    <div className="flex justify-between  h-[54px] px-8 py-8">
      <div>
        <p className="text-lg font-bold">Create product</p>
        <p className="text-sm font-medium text-[#475467]">
          Upload your product photo and details here.
        </p>
      </div>
      <div className="space-x-3">
        <Link to="/">
          <Button
            styles={"border border-gray-300 text-black"}
            content={"Cancel"}
          />
        </Link>
        <Button
          type="submit"
          handleClick={onSubmit}
          styles={`${
            isPending && "bg-opacity-30"
          } bg-[#1570EF] text-white  border border-gray-300`}
          content={isPending ? "Creating..." : "Create"}
        />
      </div>
    </div>
  );
};

export default Header;
