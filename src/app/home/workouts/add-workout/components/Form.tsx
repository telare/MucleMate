import Button from "@/shared/components/buttons/Button";
import FormField from "@/shared/components/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export default function Form() {
  const schema = z.object({});
  type ExerciseSchema = z.infer<typeof schema>;
  const { handleSubmit, reset } = useForm<ExerciseSchema>({
    resolver: zodResolver(schema),
  });
  const methods = useForm<ExerciseSchema>({
    resolver: zodResolver(schema),
  });
  const formFieldsRegisterTitles: string[] = ["title", "set", "reps", "weight"];
  function submitExerciseData() {}

  return (
    <form onSubmit={handleSubmit(submitExerciseData)}>
      <h1>Add an exercise</h1>
      <div>
        <FormProvider {...methods}>
          {formFieldsRegisterTitles.map((title, i) => (
            <FormField
              type="text"
              key={i}
              registerTitle={title}
              placeholder={`Enter ${title}`}
              translationContext="addWorkout"
            />
          ))}
        </FormProvider>
      </div>
      {/* btns */}
      <div>
        <Button type="reset" fnc={() => reset()} text="Reset" />
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
}
