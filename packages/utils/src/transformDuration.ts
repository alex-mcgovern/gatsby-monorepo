interface GetDurationArgs {
  inputDuration: number;
  displayUnit: "ms" | "seconds" | "minutes";
}

export function transformDuration({
  inputDuration,
  displayUnit,
}: GetDurationArgs) {
  if (displayUnit === "ms") {
    return inputDuration.toPrecision(3);
  }
  if (displayUnit === "seconds") {
    return (inputDuration / 1000).toPrecision(2);
  }

  return inputDuration.toString();
}
