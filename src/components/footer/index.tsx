import { Separator } from "@/components/ui/separator";
import { formatText } from "@/helpers/formatText";
import { Button } from "@/components/ui/button";

type FooterProps = {
  total: number;
  onFilterAll: () => void;
  onFilterDone: () => void;
  onFilterUndone: () => void;
};

export const Footer = ({
  total,
  onFilterAll,
  onFilterDone,
  onFilterUndone,
}: FooterProps) => {
  return (
    <>
      <Separator />
      <div className="flex flex-col gap-4 justify-between sm:items-center sm:flex-row">
        <div>
          <p>{formatText(total)}</p>
        </div>
        <div className="space-x-6">
          <Button className="p-0" variant={"link"} onClick={onFilterAll}>
            All
          </Button>
          <Button className="p-0" variant={"link"} onClick={onFilterDone}>
            Done
          </Button>
          <Button className="p-0" variant={"link"} onClick={onFilterUndone}>
            Undone
          </Button>
        </div>
      </div>
    </>
  );
};
