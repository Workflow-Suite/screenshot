<script>
  import { openImage } from "$lib/imgPicker";
  import ImgDisplay from "$lib/ImgDisplay.svelte";
</script>

<div
  class="w-screen h-screen bg-stone-900 flex items-center flex-col space-y-5 text-white"
>
  <!--Menu Bar-->
  <div
    class="rounded-xl border-teal-300 py-2 px-4 flex flex-row space-x-5 justify-center items-center mt-4"
  >
    <button class="bg-red-400 py-2 px-4 rounded-xl" on:click={openImage}>
      Choose Image
    </button>
  </div>

  <div
    class="w-screen h-full bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 flex justify-center items-center"
  >
    <ImgDisplay />
  </div>
</div>
