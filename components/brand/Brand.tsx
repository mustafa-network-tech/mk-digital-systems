import Image from "next/image";
export function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <Image
          src="/brand/mk-mark.webp"
          alt=""
          width={64}
          height={34}
          priority
        />
      </span>
      <span className="brand-wordmark">
        MK DIGITAL<span>SYSTEMS</span>
      </span>
    </span>
  );
}
