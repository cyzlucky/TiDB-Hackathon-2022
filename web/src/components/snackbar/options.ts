import { BaseVariant, OptionsObject } from "notistack";

type Variant = "default" | "error" | "success" | "warning" | "info" | undefined;

function tipOption(variant: Variant): OptionsObject<BaseVariant> {
  return {
    variant,
    "preventDuplicate": true,
    "anchorOrigin": {
      "vertical": "top",
      "horizontal": "center"
    }
  };
}

export const tipDefault = tipOption("default");
export const tipInfo = tipOption("info");
export const tipError = tipOption("error");
export const tipWarning = tipOption("warning");
export const tipSuccess = tipOption("success");
