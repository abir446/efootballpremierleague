import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/season/fixtures"}>Fixtures</Link>
    </div>
  );
};

export default page;