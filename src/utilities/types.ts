import { FormDataSchema } from "@/lib/schema";
import { z } from "zod";

export type ServerErrors = {
  firstName?: string[] | undefined;
  lastName?: string[] | undefined;
  email?: string[] | undefined;
  country?: string[] | undefined;
  street?: string[] | undefined;
  city?: string[] | undefined;
  state?: string[] | undefined;
  zip?: string[] | undefined;
};

export type Inputs = z.infer<typeof FormDataSchema>;
