import random from "https://cdn.skypack.dev/random";
import seedrandom from "https://cdn.skypack.dev/seedrandom";

export default class Worklet {
  paint(ctx, geometry, props) {
    const { width, height } = geometry;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
  }
}

if (typeof window?.registerPaint !== "undefined") {
  window.registerPaint("workletName", Worklet);
}
