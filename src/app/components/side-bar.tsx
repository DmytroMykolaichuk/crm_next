import Image from 'next/image';

interface ChildrenType {
  children: React.ReactNode;
}

export default function SideBar({
  children,
}: ChildrenType): React.ReactElement {
  return (
    <div className="fixed h-screen pt-[32px] bg-gray-900 w-1/6 flex flex-col items-center">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={122}
        height={22}
        className=" mb-[77px]"
      />
      {children}
    </div>
  );
}
