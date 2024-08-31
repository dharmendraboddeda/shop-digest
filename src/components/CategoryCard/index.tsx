import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export interface IAppProps {
  title?: string;
  image?: string;
}
export interface ICategoryCardProps {
  className?: string;
  cardTitle: string;
  cardDescription: string;
  apps: IAppProps[];
}

export const CategoryCard = ({
  apps,
  cardDescription,
  cardTitle,
  className,
}: ICategoryCardProps) => {
  return (
    <div
      className={`p-4 border rounded-lg w-full sm:w-82 space-y-4 ${className} flex flex-col justify-between h-full`}
    >
      <div className="space-y-4">
        <span className="font-bold line-clamp-1">{cardTitle}</span>
        <p className="text-gray-700 text-sm line-clamp-2">{cardDescription}</p>
        <div className="flex gap-2 items-center p-4 justify-between border-b-2 shadow-sm">
          <div className="flex gap-2">
            {apps.slice(0, 3).map((app, index) => (
              <Image
                key={index}
                width={30}
                height={30}
                src={app.image || ""}
                alt={app.title?.charAt(0) || ""}
                className="object-cover rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:justify-center sm:justify-between flex-wrap gap-4 p-2">
        <span className="text-green-600">{apps.length} Apps</span>
        <button className="bg-black text-white text-[12px] pl-5 pr-5 rounded-full flex gap-2 p-2 items-center">
          <span>Explore</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
