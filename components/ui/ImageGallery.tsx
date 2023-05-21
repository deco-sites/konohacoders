import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description Title */
  title: string;

  /** @description Description */
  description: string;

  /** @description Image one */
  imageOne: LiveImage;

  /** @description Image two */
  imageTwo: LiveImage;

  /** @description Image Three */
  imageThree: LiveImage;

  /** @description Image Four */
  imageFour: LiveImage;

  /** @description Image's alt text */
  alt: string;
}

export default function ImageGallery({
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  alt,
}: Props) {
  return (
    <section class="px-4 max-w-[1360px] py-4 lg:m-auto">
      <h1 class="text-secundary font-medium text-2xl">
        {title}
      </h1>
      <p class="text-secundary">
        {description}
      </p>
      <div class="grid grid-cols-2 gap-4 mt-11 lg:flex lg:gap-8 lg:mt-10">
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] lg:min-h-[316px] lg:min-w-[316px] lg:-w-fit"
          src={imageOne}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] lg:min-h-[316px] lg:min-w-[316px] lg:-w-fit"
          src={imageTwo}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] lg:min-h-[316px] lg:min-w-[316px] lg:-w-fit"
          src={imageThree}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] lg:min-h-[316px] lg:min-w-[316px] lg:-w-fit"
          src={imageFour}
          alt={alt}
        />
      </div>
    </section>
  );
}
