import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src="https://avatars.githubusercontent.com/u/55987186"
            alt="Lucas Doell"
            className="hidden h-6 w-6 md:inline-block rounded-full"
            width={24}
            height={24}
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://twitter.com/lucasdoell"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Lucas Doell
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/lucasdoell/chess-at-the-edge"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
