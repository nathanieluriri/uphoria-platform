"use client";
import Container from "@/components/elements/Container";
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";

const Header = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  return (
    <header className=" sticky top-0 bg-stone-950 z-50">
      <Container className="flex justify-between py-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Uphoria logo"
            width={200}
            height={200}
            className=" w-[7rem]"
          />
        </Link>
        <button
          onClick={() => setOpenRegisterModal(true)}
          className="bg-white rounded-xl text-slate-950 px-3 py-2 flex justify-center items-center gap-2"
        >
          <FiUserPlus />
          Register
        </button>
        <RegisterModal
          externalIsOpen={openRegisterModal}
          setExternalIsOpen={setOpenRegisterModal}
        />
      </Container>
    </header>
  );
};

export default Header;
