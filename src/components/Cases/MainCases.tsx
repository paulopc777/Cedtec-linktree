import { cn } from "../../lib/utils";
import Marquee from "../ui/marquee";
import { reviews } from "./ConstanstsCases";

const firstRow = reviews;
const ReviewCard = ({
  img,
  name,
  id,
}: {
  img: string;
  name: string;
  id: number;
}) => {
  return (
    <figure
      key={id}
      className={cn(
        "relative w-52 h-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        className="absolute object-cover w-full h-full opacity-65  top-0 left-0"
        alt=""
        src={img}
      />

      <div className="flex flex-row items-center gap-2 relative">
        <div className="flex flex-col text-black font-black bg-green-700 -translate-x-4 text-end pl-5 rounded-r-2xl">
          <figcaption className="text-xl font-medium dark:text-white pr-2 text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <a href="https://cedtec.com.br/" target="_blank">
            <ReviewCard key={review.id} {...review} />
          </a>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
}
