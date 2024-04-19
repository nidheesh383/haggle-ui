import Providers from "@/app/providers";

export default function MinimalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
