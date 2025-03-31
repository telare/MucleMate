"use client";
import { z } from "zod";
import PersonalizationForm from "../components/Form";

export default function PersonalizatonPage1() {
  const schema = z.object({
    Gender: z.string(),
    Goal: z.string(),
  });
  const inputs: React.ReactNode = (
    <>
      <div>
        <label>
          <input type="radio" name="GenderOption" value="Male" required />Male
        </label>
        <label>
          <input type="radio" name="GenderOption" value="Female" required />Female
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="GoalOption" value="Loose fat" required />Loose fat
        </label>
        <label>
          <input type="radio" name="GoalOption" value="Gain mucles" required />Gain mucles
        </label>
      </div>
    </>
  );

  return (
    <PersonalizationForm
      fieldsTypes={"text"}
      customInputs={inputs}
      schema={schema}
      titleTexts={[
        "What’s Your Gender & goal",
        "Select options that best fits you",
      ]}
    />
  );
}
