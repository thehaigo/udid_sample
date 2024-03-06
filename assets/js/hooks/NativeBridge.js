const NativeBridge = {
  mounted() {
    this.handleEvent("get_udid", () => {
      if (window.navigator.userAgent.match(/Mobile/) == null) {
        this.pushEvent("receive", { message: "12345678910" });
      } else if (window.webkit && window.webkit.messageHandlers) {
        window.webkit.messageHandlers.getUDID.postMessage("get_udid");
      } else {
        this.pushEvent("receive", { message: "12345678910" });
      }
    });

    const callFromNative = (value) => {
      this.pushEvent("receive", { message: value });
    };
    window.callFromNative = callFromNative;
  },
};

export default NativeBridge;
