import PackageFilter from "./PackageFilter";
import Tripcard from "./ui/Tripcard";

export default function Package() {
    return (
      <div className=" md:grid md:grid-cols-10 gap-4  flex flex-col mt-20 p-4">
        <div className=" hidden lg:flex md:col-span-3  ml-24 p-5 w-fit shadow-sm">
            <PackageFilter/>
        </div>
        <div className="md: col-span-7 bg-white shadow-sm p-4 ">

            <Tripcard/>
        </div>
      </div>
    );
  }