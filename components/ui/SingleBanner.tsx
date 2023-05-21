import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @title Container alignment
   * @description Alignment of the container and texts inside
   * @default middle
   */
  position: "left" | "middle" | "right";

  /**
   * @default Tagline
   */
  tag: string;
  /**
   * @default Short heading here
   */
  title: string;
  /**
   * @default Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
   */
  description: string;

  /**
   * @title Desktop background image
   * @default https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png
   */
  desktop?: LiveImage;

  /**
   * @title Mobile background image
   * @default https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png
   */
  mobile?: LiveImage;
}

function SingleBanner({
  tag = "Tagline",
  title = "Short heading here",
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ",
  mobile,
  desktop,
}: Props) {
  return (
    <div className="p-4 md:p-10 flex flex-col w-full relative overflow-hidden">
      <Picture className="absolute inset-0 object-cover z-0">
        {mobile && (
          <Source
            media="(max-width: 767px)"
            src={mobile}
            width={360}
            height={600}
          />
        )}
        {desktop && (
          <Source
            media="(min-width: 768px)"
            src={desktop}
            width={1440}
            height={600}
          />
        )}
        <img class="object-cover w-full h-full" alt={title} />
      </Picture>

      <div className="max-w-[144px] md:max-w-[420px] flex flex-col relative z-10">
        <span className="text-xs mb-1 md:mb-4 md:text-base">{tag}</span>
        <h2 className="text-xl mb-3 md:mb-6 md:text-5xl">{title}</h2>
        <h3 className="text-sm mb-4 md:mb-6 md:text-lg">{description}</h3>
      </div>
    </div>
  );
}

export default SingleBanner;
