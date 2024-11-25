import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = ({}) => {
  return (
    <footer className="mt-12">
      <Container className="flex flex-col md:flex-row justify-center items-center gap-6 md:justify-between py-7">
        <div className="flex flex-col items-center gap-3 order-2 md:order-1">
          <Link href="#">
            <Image
              src="/logo.png"
              alt="Uphoria logo"
              width={200}
              height={200}
              className=" w-[7rem]"
            />
            Logo
          </Link>
          <p className="text-sm ">
            All rights reserved @Uphoria {new Date().getFullYear()}
          </p>
          <Link href="/privacy-policy" className="underline text-sm">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 order-1 md:order-2">
          <p className="">Connect With Us</p>
          <div className="flex gap-3">
            <Link href="#" target="_blank" className="group">
              <Card className="p-2 !px-2 rounded-full group-hover:bg-rose-800 transition-all duration-150 group-hover:rounded-xl">
                <FaWhatsapp size={23} />
              </Card>
            </Link>
            <Link href="#" className="group">
              <Card className="p-2 !px-2 rounded-full group-hover:bg-rose-800 transition-all duration-150 group-hover:rounded-xl">
                <FaTelegramPlane size={23} />
              </Card>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
