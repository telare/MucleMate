import Button from "@/shared/components/buttons/Button";
import { useFormContext } from "react-hook-form";

interface AccountFormButtons {
  editMode: boolean;
  setEditMode: (arg: boolean) => void;
}

export default function AccountFormButtons({
  editMode,
  setEditMode,
}: AccountFormButtons) {
  const { reset } = useFormContext();
  return (
    <>
      {editMode ? (
        <>
          <Button type="button" text="Submit" />
          <Button type="button" text="Cancel" fnc={() => reset()} />
        </>
      ) : (
        <>
          <Button type="button" text="Edit" fnc={() => setEditMode(true)} />
        </>
      )}
    </>
  );
}
