import { FooterLink, JoinForm } from "../components";

export default function Join() {
  return (
    <div className="min-h-screen flex items-center justify-center px-3 flex-col">
      <JoinForm />
      <FooterLink className="pt-8" />
    </div>
  );
}
