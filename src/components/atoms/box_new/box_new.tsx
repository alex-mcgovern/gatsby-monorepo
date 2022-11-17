import { ComponentPropsWithoutRef } from "react";
import { createBox } from "@dessert-box/react";
import { getSprinkles } from "../../../styles/functional_classnames.css";

export const BoxNew = createBox({ atoms: getSprinkles });

export type BoxNewProps = ComponentPropsWithoutRef<typeof BoxNew>;
