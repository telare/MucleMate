import { z, ZodObject, ZodRawShape } from "zod";

export const PersonalizationSchemas: ZodObject<ZodRawShape>[] = [
  z.object({
    gender: z.enum(["Male", "Female"]),
    goal: z.enum(["Loose body fat", "Gain mucles"]),
  }),
  z.object({
    age: z
      .string()
      .transform((ageStr) => parseInt(ageStr, 10))
      .refine((age) => !isNaN(age), {
        message: "Age must be a valid number",
      })
      .pipe(
        z
          .number()
          .min(10, "Age must be at least 10")
          .max(90, "Age must be less than 90")
      ),

    height: z
      .string()
      .transform((heightStr) => parseInt(heightStr, 10))
      .refine((height) => !isNaN(height), {
        message: "Height must be a valid number",
      })
      .pipe(
        z
          .number()
          .min(120, "Height must be at least 120 cm")
          .max(250, "Height must be at most 250 cm")
      ),

    weight: z
      .string()
      .transform((weightStr) => parseInt(weightStr, 10))
      .refine((weight) => !isNaN(weight), {
        message: "Weight must be a valid number",
      })
      .pipe(
        z
          .number()
          .min(40, "Weight must be at least 40 kg")
          .max(120, "Weight must be at most 120 kg")
      ),

    physicalActivityLevel: z
      .string()
      .transform((activityStr) => parseInt(activityStr, 10))
      .refine((activity) => !isNaN(activity), {
        message: "Activity level must be a valid number",
      })
      .pipe(
        z
          .number()
          .min(1, "Activity level must be at least 1 ")
          .max(5, "Activity level must be at most 5")
      ),
  }),
];
export const titles: string[][] = [
  ["title1", "subTitle1"],
  ["title2", "subTitle2"],
];
