import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-sky-200">We provide high-quality phone accessories to enhance your mobile experience.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-300">Home</a></li>
              <li><a href="#" className="hover:text-sky-300">Products</a></li>
              <li><a href="#" className="hover:text-sky-300">About</a></li>
              <li><a href="#" className="hover:text-sky-300">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-sky-200">123 Accessory Street</p>
            <p className="text-sky-200">Phone City, AC 12345</p>
            <p className="text-sky-200">Email: info@agatephone.com</p>
            <p className="text-sky-200">Phone: (123) 456-7890</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-sky-200">Stay updated with our latest offers!</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-sky-800 border-sky-700 text-white placeholder-sky-400" />
              <Button className="bg-sky-500 hover:bg-sky-600">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-sky-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sky-300">&copy; 2024 Agate Phone Grip. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sky-300 hover:text-white"><Facebook size={24} /></a>
            <a href="#" className="text-sky-300 hover:text-white"><Twitter size={24} /></a>
            <a href="#" className="text-sky-300 hover:text-white"><Instagram size={24} /></a>
            <a href="#" className="text-sky-300 hover:text-white"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}