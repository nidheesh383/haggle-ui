import { Divider, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer
      style={{
        fontSize: 1,
        color: "background",
        background: "text",
        // variant: 'styles.footer',
      }}
    >
      <Divider className="my-4" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          maxWidth: 768,
          // mx: 'auto',
          // px: 2,
          // py: 4,
        }}
      >
        <Link href="/">Footer</Link>
        <Link href="/">Home</Link>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
        <div />
        <p>© 2019 Jane Doe</p>
      </div>
    </footer>
  );
}
