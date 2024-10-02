import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

// Assuming the image is imported correctly
import productImage from "../assets/image.png"

const products = Array(8).fill({
  name: "CRYSTAL AGATE PHONE GRIP",
  price: 9.99,
  image: productImage
})

export default function ProductListing() {
  return (
    <div className="container z-40 mx-auto px-8 py-8 z-50 mt-4">
      <h1 className="lg:text-[46px] text-4xl text-[#31546D] font-bold text-center ">All Products</h1>
        <div className='h-[4px] w-[58px] bg-[#F2F2F2] mx-auto rounded-[24px] mb-5 lg:mb-16 mt-4'></div>
      
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4 ml-4">
        <div className="flex items-center  space-x-2">
          <Label htmlFor="filter" className="text-sm text-[#9AB0C0] font-medium">
            Filter:
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="filter" className="w-[130px] border-none focus:ring-0 focus-within:ring-0 ">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="best">Best Selling</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-2">
          <Label htmlFor="sort" className="text-sm text-[#9AB0C0] font-medium">
            Sort:
          </Label>
          <Select defaultValue="best">
            <SelectTrigger id="sort" className="w-[130px] border-none focus:ring-0 focus-within:ring-0 ">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="best">Best Selling</SelectItem>
              <SelectItem value="new">New Arrivals</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="bg-white border-[2px] border-[#F2F2F2] p-4 rounded-[30px] shadow transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-auto object-cover mb-4"
            />
            <h2 className="text-sm text-gray-600 font-semibold mb-2">{product.name}</h2>
            <p className="text-[#317189] mb-4">${product.price.toFixed(2)}</p>
            <div className='rounded-[18px] bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] group-hover:p-0 p-[3px]'>
            <Button className="w-full rounded-[18px] hover: group-hover:p-[3px] bg-white text-[#75CCEB] transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#75CCEB] group-hover:to-[#6FB4FF] group-hover:text-white ">
              Add to cart
            </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <Button variant="outline" className='border-[3px] rounded-[18px] text-[#75CCEB] border-[#75CCEB]'>View all</Button>
      </div>
    </div>
  )
}