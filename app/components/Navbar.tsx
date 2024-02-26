import React from "react";
import Link from "next/link";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <div className="px-32 py-4 bg-sky-400">
  <div className="flex justify-between items-center">
    <Link href="/" className="font-bold text-5xl">CarX</Link>
    <div className="hidden md:flex space-x-4">
      <Link href="/cars" className="font-medium">Cars</Link>
      <Link href="/offers" className="font-medium">Offers</Link>
      <Link href="/create" className="font-medium">Create Offer</Link>
      <Link href="#" className="font-medium">Sign Up</Link>
      <Link href="#" className="font-medium">Log In</Link>
    </div>
  </div>
</div>

    // <Navbar>
    //   <NavbarBrand>
    
    //     <p className="font-bold text-inherit">CarX</p>
    //   </NavbarBrand>
    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarItem>
    //       <Link color="foreground" className="font-medium" href="/cars">
    //         Cars
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" className="font-medium" aria-current="page">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" className="font-medium" href="/cars/create">
    //         Create
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#" className="font-medium">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="primary" href="#" variant="flat" className="font-medium">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
  );
}
