import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <div class="container grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-left px-4">
        <span class="font-medium text-2xl">{title}</span>
      </h2>

      <Slider class="carousel carousel-center sm:carousel-end gap-6">
        {highlights.map(({ href, src, alt, label }, index) => (
          <Slider.Item
            index={index}
            class="carousel-item first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 min-w-[300px]"
          >
            <a href={href} class="card card-compact bg-base-100 relative">
              <figure>
                <Image
                  class="rounded-lg"
                  src={src}
                  alt={alt}
                  width={300}
                  height={265}
                />
              </figure>
              <div class="items-center absolute left-1/2 transform -translate-x-1/2 bottom-3 flex justify-center bg-white rounded-lg p-0.5 w-9/12">
                <h2 class="card-title text-base text-left font-medium">
                  {label}
                </h2>
              </div>
            </a>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default Highlights;
