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
          <Button
            type="submit"
            translation={{ context: "common", key: "submitBtn" }}
          />
          <Button
            type="reset"
            translation={{ context: "common", key: "cancelBtn" }}
            onClick={() => {
              reset();
              setEditMode(false);
            }}
          />
        </>
      ) : (
        <>
          <Button
            type="button"
            translation={{ context: "common", key: "editBtn" }}
            onClick={() => setEditMode(true)}
          />
        </>
      )}
    </>
  );
}
