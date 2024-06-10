"use server";

import { FormDataSchema } from "@/lib/schema";
import { Inputs } from "@/utilities/types";
import { assert } from "console";
import { z } from "zod";

export async function onFormAction(data: z.infer<typeof FormDataSchema>) {
  const parsed = await FormDataSchema.safeParseAsync(data);

  if (parsed.success) {
    // perform database actions
    return { success: true, user: parsed.data };
  } else {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }
}
