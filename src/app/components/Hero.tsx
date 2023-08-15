import Image from "next/image";
import profileImage from "../../../public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center py-5">
      <div>
        <Image
          src={profileImage}
          alt={"logo"}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex flex-col items-center py-4">
        <p className="font-bold text-3xl">{"Hi, I'm griteach"}</p>
        <p className="text-base">Full-stack Engineer</p>
        <p className="text-base">부지런히 배우고 익혀서 실천하는 사람</p>
      </div>
      <div>
        <Link href="/contact">
          <button className="bg-orange-400 rounded-lg px-2 py-1 font-bold text-sm">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}
