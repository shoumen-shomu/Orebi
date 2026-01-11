import React, { useEffect, useState } from "react";
import Container from "../Container";
import SubHeading from "../SubHeading";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { FaList } from "react-icons/fa";
import axios from "axios";
import Products from "../Products";
// Shadecn
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
// Shadecn

const Shop = () => {
  let [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    alldatas();
  }, []);
  return (
    <div className="pt-[225px] pb-8">
      <Container>
        <SubHeading className={"pb-3"} text={"Products"} />
        <p className="font-sans font-normal text-[12px] text-[#767676]">
          Home > Products
        </p>
        <div className="pt-[130px]">
          <div className="flex gap-x-10">
            {/* sidebar */}
            <div className="h-full w-[371px]">
              {/* Shop by Category */}
              <div className="">
                <h3 className="font-sans font-bold text-xl text-[#262626] pb-[35px]">
                  Shop by Category
                </h3>
                <ul>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center py-5 w-full justify-between">
                      <p className="font-sans font-normal text-[16px] text-[#767676]">
                        Category 1
                      </p>
                      <Link>
                        <FaPlus className="font-sans font-normal text-sm text-[#767676] hover: font-bold hover:text-base hover:text-black" />
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center py-5 w-full justify-between">
                      <p className="font-sans font-normal text-[16px] text-[#767676]">
                        Category 2
                      </p>
                      <Link>
                        <FaPlus className="font-sans font-normal text-sm text-[#767676] hover: font-bold hover:text-base hover:text-black" />
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center py-5 w-full justify-between">
                      <p className="font-sans font-normal text-[16px] text-[#767676]">
                        Category 3
                      </p>
                      <Link>
                        <FaPlus className="font-sans font-normal text-sm text-[#767676] hover: font-bold hover:text-base hover:text-black" />
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center py-5 w-full justify-between">
                      <p className="font-sans font-normal text-[16px] text-[#767676]">
                        Category 4
                      </p>
                      <Link>
                        <FaPlus className="font-sans font-normal text-sm text-[#767676] hover: font-bold hover:text-base hover:text-black" />
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center py-5 w-full justify-between">
                      <p className="font-sans font-normal text-[16px] text-[#767676]">
                        Category 5
                      </p>
                      <Link>
                        <FaPlus className="font-sans font-normal text-sm text-[#767676] hover: font-bold hover:text-base hover:text-black" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Shop by Category */}

              {/* Shop by Color */}
              <div className="pt-[50px]">
                <h3 className=" flex items-center justify-between font-sans font-bold text-xl text-[#262626] pb-[20px]">
                  Shop by Color <IoMdArrowDropup className={"cursor-pointer"} />
                </h3>
                <ul>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center gap-x-2 py-5 w-full">
                      <div className="w-[11px] h-[11px] rounded-[50%] bg-black"></div>
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Color 1
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center gap-x-2 py-5 w-full">
                      <div className="w-[11px] h-[11px] rounded-[50%] bg-[#FF8686]"></div>
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Color 2
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center gap-x-2 py-5 w-full">
                      <div className="w-[11px] h-[11px] rounded-[50%] bg-[#7ED321]"></div>
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Color 3
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center gap-x-2 py-5 w-full">
                      <div className="w-[11px] h-[11px] rounded-[50%] bg-[#B6B6B6]"></div>
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Color 4
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="flex items-center gap-x-2 py-5 w-full">
                      <div className="w-[11px] h-[11px] rounded-[50%] bg-[#15CBA5]"></div>
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Color 5
                        </p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Shop by Color */}

              {/* Shop by Brand */}
              <div className="pt-[50px]">
                <h3 className=" flex items-center justify-between font-sans font-bold text-xl text-[#262626] pb-[20px]">
                  Shop by Brand
                  <IoMdArrowDropup className={"cursor-pointer"} />
                </h3>
                <ul>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Brand 1
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Brand 2
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Brand 3
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Brand 4
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          Brand 5
                        </p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Shop by Brand */}

              {/* Shop by Price */}
              <div className="pt-[50px]">
                <h3 className=" flex items-center justify-between font-sans font-bold text-xl text-[#262626] pb-[20px]">
                  Shop by Price
                  <IoMdArrowDropup className={"cursor-pointer"} />
                </h3>
                <ul>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          $0.00 - $9.99
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          $10.00 - $19.99
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          $20.00 - $29.99
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          $30.00 - $39.99
                        </p>
                      </Link>
                    </div>
                  </li>
                  <li className="border-b border-b-[#767676]">
                    <div className="py-5">
                      <Link>
                        <p className="font-sans font-normal text-[16px] text-[#767676] hover:font-bold hover:text-black duration-300">
                          $40.00 - $69.99
                        </p>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Shop by Price */}
            </div>
            {/* sidebar */}
            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex gap-x-5">
                  <div className="p-2.5 border border-[#F0F0F0] text-[#737373] hover:bg-black hover:text-white duration-300">
                    <FaList />
                  </div>
                  <div className="p-2.5 border border-[#F0F0F0] text-[#737373] hover:bg-black hover:text-white duration-300">
                    <FaList />
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <div className="flex items-center">
                    <p className="mr-2 font-sans font-normal text-base text-[#767676]">
                      Sort by:
                    </p>
                    <select className="w-[239px] px-[15px] py-[3px] border border-[#F0F0F0] outline-0 font-sans font-normal text-base text-[#767676] leading-[30px]">
                      <option value="" active>
                        Featured
                      </option>
                      <option value="" active>
                        Price: Low to High
                      </option>
                      <option value="" active>
                        Price: High to Low
                      </option>
                      <option value="" active>
                        Price: High to Low
                      </option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2 font-sans font-normal text-base text-[#767676]">
                      Show:
                    </p>
                    <select className="w-[139px] px-[15px] py-[3px] border border-[#F0F0F0] outline-0 font-sans font-normal text-base text-[#767676]   leading-[30px]">
                      <option value="" active>
                        36
                      </option>
                      <option value="" active>
                        37
                      </option>
                      <option value="" active>
                        38
                      </option>
                      <option value="" active>
                        39
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10 pt-15">
                {allData.slice(0, 3).map((item) => (
                  <Products
                    productsImg={item.thumbnail}
                    badgeText={item.brand}
                    productName={item.title}
                    productPrice={item.price}
                  />
                ))}
                {allData.slice(4, 7).map((item) => (
                  <Products
                    productsImg={item.thumbnail}
                    badgeText={item.brand}
                    productName={item.title}
                    productPrice={item.price}
                  />
                ))}
                {allData.slice(8, 11).map((item) => (
                  <Products
                    productsImg={item.thumbnail}
                    badgeText={item.brand}
                    productName={item.title}
                    productPrice={item.price}
                  />
                ))}
                {allData.slice(12, 15).map((item) => (
                  <Products
                    productsImg={item.thumbnail}
                    badgeText={item.brand}
                    productName={item.title}
                    productPrice={item.price}
                  />
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100" >
                    <PaginationLink asChild><Link to="/shop">1</Link></PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100" >
                    <PaginationLink asChild><Link to="/shop">2</Link></PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100" >
                    <PaginationLink asChild><Link to="/shop">3</Link></PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100" >
                    <PaginationLink asChild><Link to="/shop">4</Link></PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100" >
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem className="font-sans font-normal text-sm text-[#767676] duration-100" >
                    <PaginationLink asChild><Link to="/shop">10</Link></PaginationLink>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
