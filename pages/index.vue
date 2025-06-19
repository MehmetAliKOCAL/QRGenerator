<template>
  <div
    class="p-4 md:p-8 py-12 md:py-24 w-full h-full min-h-screen flex items-center justify-center overflow-x-hidden"
  >
    <div class="flex flex-col gap-4">
      <ClientOnly>
        <QRCode
          ref="qrCode"
          :options="qrOptions"
          :fileName="fileName"
          :fileExt="fileExt"
        />
      </ClientOnly>

      <div class="mt-4">
        <div class="flex gap-4">
          <div class="w-[60px]">Data</div>
          <input
            v-model.number="qrOptions.data"
            type="text"
            class="w-full outline-0 border-b-2 border-gray-400 focus:border-blue-600"
          />
        </div>
        <div class="mt-1 text-xs text-gray-700">
          * Type the link or text that you want to display when the qr code is
          scanned
        </div>
      </div>
      <div class="mt-4">
        <div class="flex gap-4">
          <div class="w-[60px]">Image</div>
          <input
            ref="qrImage"
            type="file"
            class="w-[250px] outline-0 cursor-pointer"
            accept="image/*"
            @change="updateQRImage($event)"
          />
          <button
            @click="clearQRImage"
            class="px-6 py-1 rounded-md bg-gray-200 transition-all duration-200 hover:bg-gray-300"
          >
            Clear
          </button>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="w-[60px]">Width</div>
        <input
          v-model.number="qrOptions.width"
          type="number"
          class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
          @keypress="isNumber($event)"
        />
        px
      </div>
      <div class="flex gap-4">
        <div class="w-[60px]">Height</div>
        <input
          v-model.number="qrOptions.height"
          type="number"
          class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
          @keypress="isNumber($event)"
        />
        px
      </div>
      <div class="flex gap-4">
        <div class="w-[60px]">Margin</div>
        <input
          v-model.number="qrOptions.margin"
          type="number"
          class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
          @keypress="isNumber($event)"
        />
        px
      </div>
      <div class="flex gap-4">
        <div class="w-[70px]">File Name</div>
        <input
          v-model="fileName"
          type="text"
          class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
        />
        <select
          v-model="fileExt"
          class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
        >
          <option value="svg">SVG</option>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <div>Background Options</div>
        <div class="flex gap-4 justify-between">
          <div class="flex gap-4">
            <div class="w-[50px]">Color</div>
            <input
              v-model="qrOptions.backgroundOptions.color"
              type="color"
              class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <div class="font-semibold">Dot Options</div>
        <div class="flex gap-4 justify-between">
          <div class="flex gap-3 w-2/5">
            <div class="w-[50px]">Color</div>
            <input
              v-model="qrOptions.dotsOptions.color"
              type="color"
              class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            />
          </div>
          <div class="flex gap-3 w-3/5">
            <div class="w-[50px]">Type</div>
            <select
              v-model="qrOptions.dotsOptions.type"
              class="w-full outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            >
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
              <option value="extra-rounded">Extra Rounded</option>
              <option value="dots">Dots</option>
              <option value="classy">Classy</option>
              <option value="classy-rounded">Classy Rounded</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <div class="font-semibold">Corner Square Options</div>
        <div class="flex gap-4 justify-between">
          <div class="flex gap-3 w-2/5">
            <div class="w-[50px]">Color</div>
            <input
              v-model="qrOptions.cornersSquareOptions.color"
              type="color"
              class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            />
          </div>
          <div class="flex gap-3 w-3/5">
            <div class="w-[50px]">Type</div>
            <select
              v-model="qrOptions.cornersSquareOptions.type"
              class="w-full outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            >
              <option value>None</option>
              <option value="square">Square</option>
              <option value="extra-rounded">Extra Rounded</option>
              <option value="dots">Dots</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <div class="font-semibold">Corner Dot Options</div>
        <div class="flex gap-4 justify-between">
          <div class="flex gap-3 w-2/5">
            <div class="w-[50px]">Color</div>
            <input
              v-model="qrOptions.cornersDotOptions.color"
              type="color"
              class="outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            />
          </div>
          <div class="flex gap-3 w-3/5">
            <div class="w-[50px]">Type</div>
            <select
              v-model="qrOptions.cornersDotOptions.type"
              class="w-full outline-0 border-b-2 border-gray-400 focus:border-blue-600"
            >
              <option value>None</option>
              <option value="square">Square</option>
              <option value="dots">Dots</option>
            </select>
          </div>
        </div>
      </div>

      <button
        @click="downloadQRCode()"
        class="py-2 px-5 mt-3 w-full bg-blue-600 rounded-md text-white transition-all duration-200 hover:opacity-80 shadow-md"
      >
        Download
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import QRCode from "@/components/QRCode.vue";

const qrImage = ref(null);
const fileExt = ref("png");
const fileName = ref("QR Generator");
const qrCode = ref(null as any as typeof QRCode);
const qrOptions = reactive({
  data: "https://qrgen.gwyndev.com/",
  width: 300,
  height: 300,
  margin: 0,
  image: "",
  type: "png",
  dotsOptions: { color: "#000000", type: "rounded" },
  backgroundOptions: { color: "#ffffff" },
  cornersSquareOptions: { color: "#000000", type: "" },
  cornersDotOptions: { color: "#000000", type: "" },
});

function downloadQRCode() {
  const { $qrCodeStyling } = useNuxtApp();
  qrCode.value.download();
}

function isNumber(event: KeyboardEvent): void {
  if (!/[0-9]/.test(event?.key)) event.preventDefault();
}

function updateQRImage(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      qrOptions.image = reader?.result as string;
    },
    false
  );
  if (file) reader.readAsDataURL(file);
}

function clearQRImage() {
  qrOptions.image = "";
  if (qrImage.value) (qrImage.value as HTMLInputElement).value = "";
}
</script>
