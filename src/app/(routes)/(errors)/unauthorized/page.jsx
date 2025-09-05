import Heading from "@/components/typography/heading";
import LinkButton from "@/components/ui/link-button";

export const metadata = {
  title: "Ikke Autoriseret | Landrup Dans"
};

export default function UnauthorizedPage() {
  return (
    <div className="text-center">
      <Heading text="Adgang Nægtet" size={"large"}/>
      <div className="mt-6">
        <p className="mb-6 text-lg text-button-text">
          Du har ikke tilladelse til at se denne side.
        </p>
        <LinkButton
          href="/"
          text="Tilbage til forsiden"
          className="!bg-activity-card-textarea"
        />
      </div>
    </div>
  );
}
