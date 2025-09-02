import Logo from "@/components/typography/logo";
import Button from "@/components/ui/button";

export const metadata = {
  title: "Velkommen"
};

function WelcomePage() {
  return (
    <>
      <div className="bg-[url('/images/splash-image.jpg')] min-h-screen bg-no-repeat bg-center bg-cover flex flex-col items-start justify-center relative pt-30">
        <Logo />

        <Button text={"Kom i gang"} className="self-center absolute bottom-15"/>
      </div>
    </>
  );
}

export default WelcomePage;