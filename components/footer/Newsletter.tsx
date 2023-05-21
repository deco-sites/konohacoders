import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

function Newsletter() {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="flex flex-col items-center gap-6 bg-white pb-8">
      <div class="flex flex-col gap-2 max-w-[900px]">
        <span class="text-secondary font-bold text-1xl">
          Subscribe to our newsletter to get the updates to our last collection
        </span>
        <span class="text-sm text-secondary">
          Get 20% off on your first order just by subscribing for our newsletter
        </span>
      </div>
      <form
        class="font-body text-body w-full sm:w-[408px] form-control"
        onSubmit={handleSubmit}
      >
        <div class="input-group">
          <input
            name="email"
            class="flex-grow input input-primary border-secondary"
            placeholder="Enter your email"
          />
          <button class="btn-secondary disabled:loading p-2" disabled={loading}>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
