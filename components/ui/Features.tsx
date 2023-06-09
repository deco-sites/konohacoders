import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <div class="container min-h-[280px] p-6 sm:px-0 sm:py-10">
      <div>
        <div class="flex flex-col justify-evenly divide-y divide-base-200 sm:flex-row sm:divide-y-0 sm:divide-x sm:mx-0 sm:my-10 border-hidden w-full m-0">
          {features.map(({ icon: id = "Truck", title, description }) => (
            <div class="flex flex-row gap-4 py-6 sm:flex-col sm:py-0 sm:px-8 border-hidden flex-1">
              <Icon
                class="rounded bg-slate-200 p-2"
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
              />
              <div class="flex flex-col gap-2">
                <span class="font-medium text-xl b">{title}</span>
                <span class="text-sm">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
