import { Separator } from "@/components/ui/separator";
import { formatText } from "@/helpers/formatText";
import { Button } from "@/components/ui/button";

type FooterProps = {
  total: number;
};

export const Footer = ({ total }: FooterProps) => {
  return (
    <>
      <Separator />
      <div className="flex flex-col gap-4 justify-between md:items-center md:flex-row">
        <div>
          <p>{formatText(total)}</p>
        </div>
        <div className="flex gap-4">
          <Button variant={"link"}>All</Button>
          <Button variant={"link"}>Done</Button>
          <Button variant={"link"}>Undone</Button>
        </div>
      </div>
    </>
  );
};
