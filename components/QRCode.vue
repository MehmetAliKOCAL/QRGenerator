<template>
  <div class="flex justify-center">
    <div class="max-w-[600px] max-h-[600px] overflow-hidden shadow-md border-2">
      <div ref="qrCode" class=""></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QRCodeStyling, { type FileExtension } from "qr-code-styling";

const props = defineProps({
  options: {
    type: Object,
    default: {
      data: "https://qrgen.gwyndev.com/" as string,
      width: 300,
      height: 300,
      image: "",
      margin: 0,
      type: "png",
      dotsOptions: { color: "#000000", type: "rounded" },
      backgroundOptions: { color: "#ffffff" },
      cornersSquareOptions: { color: "#000000", type: "" },
      cornersDotOptions: { color: "#000000", type: "" },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20,
        imageSize: 0.4,
        hideBackgroundDots: true,
      },
      qrOptions: {
        typeNumber: 0,
        mode: "Byte",
        errorCorrectionLevel: "Q",
      },
    },
  },
  fileName: {
    type: String,
    default: "QR Generator",
  },
  fileExt: {
    type: String,
    default: "png",
  },
});

const { $qrCodeStyling } = useNuxtApp();
const qrCodeStyling: QRCodeStyling = $qrCodeStyling(props.options);
const qrCode = ref<HTMLElement | undefined>(undefined);

onMounted(() => {
  qrCodeStyling.append(qrCode.value);
  if (qrCode.value!.firstChild instanceof HTMLElement) {
    qrCode.value?.firstChild?.setAttribute(
      "viewBox",
      `0 0 ${props.options.width} ${props.options.height}`
    );
  }
});

watch(props, () => {
  qrCodeStyling.update(props.options);
  if (qrCode.value?.firstChild instanceof HTMLElement) {
    qrCode.value?.firstChild?.setAttribute(
      "viewBox",
      `0 0 ${props.options.width} ${props.options.height}`
    );
  }
});

function download() {
  qrCodeStyling.download({
    name: props.fileName,
    extension: props.fileExt as FileExtension,
  });
}

defineExpose({
  download,
});
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
