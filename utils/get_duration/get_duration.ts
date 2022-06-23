interface IGetDurationArgs {
  inputDuration: number;
  displayUnit: "ms" | "seconds" | "minutes";
}

export default function getDuration({
  inputDuration,
  displayUnit,
}: IGetDurationArgs) {
  if (displayUnit === "ms") {
    return inputDuration.toPrecision(3);
  }
  if (displayUnit === "seconds") {
    return (inputDuration / 1000).toPrecision(2);
  }

  return inputDuration.toString();
}
