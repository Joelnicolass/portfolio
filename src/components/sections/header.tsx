"use client";

import { MOBILE_MENU_ID } from "@/constants/navigation";
import { useHeader } from "@/hooks/sections/use-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { LocalClock } from "@/components/ui/local-clock";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { MenuButton } from "@/components/ui/menu-button";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { NavLinks } from "@/components/ui/nav-links";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const Header = () => {
  const { logo, nav, cta, clock, menu, locale, progress } = useHeader();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-xl">
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <a
            href={logo.href}
            aria-label={logo.ariaLabel}
            onClick={menu.close}
            className="flex flex-col font-display text-lg leading-[0.9] uppercase"
          >
            <span>{logo.firstName}</span>
            <span className="pl-[1.6em]">{logo.lastName}</span>
          </a>

          <NavLinks links={nav.links} ariaLabel={nav.ariaLabel} className="hidden lg:block" />

          <div className="flex items-center gap-3">
            <LocaleSwitcher {...locale} />
            <ButtonLink href={cta.href} size="sm" className="hidden lg:inline-flex">
              {cta.label}
            </ButtonLink>
            <MenuButton
              isOpen={menu.isOpen}
              onClick={menu.toggle}
              text={menu.text}
              openLabel={menu.openLabel}
              closeLabel={menu.closeLabel}
              controls={MOBILE_MENU_ID}
              className="lg:hidden"
            />
          </div>
        </Container>
        <ScrollProgress progress={progress} />
      </header>

      <MobileMenu
        id={MOBILE_MENU_ID}
        isOpen={menu.isOpen}
        links={nav.links}
        onNavigate={menu.close}
        ariaLabel={nav.ariaLabel}
        footer={<LocalClock label={clock.label} value={clock.value} />}
      />
    </>
  );
};
