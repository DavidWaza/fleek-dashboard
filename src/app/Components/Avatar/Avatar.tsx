import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div>
      <Image
        src={"/assets/avatar.jpg"}
        alt="avatar"
        width={0}
        height={0}
        sizes="10vw"
        className="w-10 h-10 object-center object-cover rounded-2xl"
      />
    </div>
  );
};

export default Avatar;
