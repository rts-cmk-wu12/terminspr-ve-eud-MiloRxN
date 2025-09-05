import Logo from "@/components/typography/logo";
import Button from "@/components/ui/button";
import DelayedLink from "@/components/ui/link-button/delayed";

export const metadata = {
  title: "Velkommen"
};

export default function WelcomePage() {
  return (
    <>
      <div className="wrapper flex flex-col items-start justify-center relative pt-30">
        <Logo />

        <DelayedLink/>
      </div>
    </>
  );
}