"use client";

import { MAGNETIC_STRENGTH } from "@/constants/motion";
import { useContact, useFooter } from "@/hooks/sections/use-contact";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CopyButton } from "@/components/ui/copy-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpIcon, ArrowUpRightIcon, DownloadIcon } from "@/components/ui/icons";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialLinks } from "@/components/ui/social-links";

export const Contact = () => {
  const contact = useContact();
  const footer = useFooter();

  return (
    <footer id={contact.id} className="inverse relative overflow-hidden pt-24 md:pt-36">
      <Container>
        <FadeIn className="mb-10 flex items-center gap-3">
          <Eyebrow className="text-accent">{contact.index}</Eyebrow>
          <Eyebrow>{contact.label}</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-display font-medium tracking-[-0.06em]">
            <span className="block">{contact.title}</span>{" "}
            <span className="block font-serif font-normal tracking-[-0.03em] text-accent italic">
              {contact.titleAccent}
            </span>
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 border-t border-line pt-10 md:grid-cols-12">
          <FadeIn className="md:col-span-5">
            <p className="text-lg text-subtle md:text-xl">{contact.description}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
            <a
              href={contact.email.href}
              className="group inline-flex items-center gap-3 text-2xl font-medium tracking-[-0.03em] break-all transition-colors hover:text-accent md:text-4xl"
            >
              {contact.email.value}
              <ArrowUpRightIcon className="size-6 shrink-0 transition-transform duration-500 group-hover:rotate-45 md:size-8" />
            </a>
            <div className="flex flex-wrap gap-3">
              <Magnetic strength={MAGNETIC_STRENGTH.strong}>
                <CopyButton {...contact.copy} />
              </Magnetic>
              <Magnetic strength={MAGNETIC_STRENGTH.strong}>
                <ButtonLink href={contact.cv.href} download={contact.cv.download} icon={<DownloadIcon />}>
                  {contact.cv.label}
                </ButtonLink>
              </Magnetic>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <Eyebrow>{contact.socials.label}</Eyebrow>
              <SocialLinks items={contact.socials.items} newTabLabel={contact.socials.newTabLabel} />
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-line py-8 text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <p>{footer.rights}</p>
          <p>{footer.built}</p>
          <a
            href={footer.backToTop.href}
            className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            {footer.backToTop.label}
            <ArrowUpIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
