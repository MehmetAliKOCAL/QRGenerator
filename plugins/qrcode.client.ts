import QRCodeStyling, { type Options } from 'qr-code-styling';

export default defineNuxtPlugin((nuxtApp) => {
  let qrCodeStyling: QRCodeStyling;
  return {
    provide: {
      qrCodeStyling: (options: Partial<Options>): QRCodeStyling => {
        if (qrCodeStyling) return qrCodeStyling;
        qrCodeStyling = new QRCodeStyling(options);
        return qrCodeStyling;
      },
    },
  };
});
