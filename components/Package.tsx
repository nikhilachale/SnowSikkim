import PackageFilter from "./PackageFilter";
import Tripcard from "./ui/Tripcard";

export default function Package() {
    return (
      <div className="grid grid-cols-10 gap-4 mt-20 p-4">
        <div className="col-span-3  ml-24 p-5 w-fit shadow-sm">
            <PackageFilter/>
        </div>
        <div className="col-span-7 bg-white shadow-sm p-4 ">

            <Tripcard/>
        </div>
      </div>
    );
  }