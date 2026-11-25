"use client";

/*
 * Link with a floating picture preview on hover, after liubruce.me's AnimatedLink
 * (github.com/xybruceliu/brucespage, MIT): a Radix HoverCard above the link that springs
 * in from below and drifts sideways with the cursor.
 */
import { useEffect, useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { DEFAULT_PREVIEW, PLACEHOLDER, type LinkSpec } from "@/lib/links";
import "./preview-link.css";

const WIDTH = 200;
const HEIGHT = 125;

function screenshotUrl(href: string) {
  const params = new URLSearchParams({
    url: href,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    colorScheme: "light",
    "viewport.isMobile": "true",
    "viewport.deviceScaleFactor": "1",
    "viewport.width": String(WIDTH * 3),
    "viewport.height": String(HEIGHT * 3),
  });
  return `https://api.microlink.io/?${params}`;
}

function previewSrc({ href, image }: LinkSpec) {
  if (image) return image;
  if (href !== PLACEHOLDER && /^https?:\/\//.test(href)) return screenshotUrl(href);
  return DEFAULT_PREVIEW;
}

type Props = LinkSpec & {
  children: React.ReactNode;
  className?: string;
};

export default function PreviewLink({ href, image, children, className = "text-link" }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [src, setSrc] = useState(() => previewSrc({ href, image }));
  const fallback = image ?? DEFAULT_PREVIEW;

  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  // eslint-disable-next-line react-hooks/set-state-in-effect -- warm the cache only after hydration
  useEffect(() => setMounted(true), []);

  const external = /^(https?:|mailto:)/.test(href);
  const linkProps = external && !href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 2);
  };

  return (
    <>
      {mounted && (
        // Preload so the preview is there the moment the card opens.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="preview-link__warm" src={src} width={WIDTH} height={HEIGHT} alt="" aria-hidden="true" onError={() => setSrc(fallback)} />
      )}
      <HoverCard.Root openDelay={50} closeDelay={100} onOpenChange={setOpen}>
        <HoverCard.Trigger asChild>
          <a href={href} className={className} onMouseMove={onMouseMove} {...linkProps}>
            {children}
          </a>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className="preview-link__content" side="top" align="center" sideOffset={10}>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="preview-link__card"
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{ x: translateX }}
                >
                  {/* Mouse-only duplicate of the link, kept out of the tab order and a11y tree. */}
                  <a href={href} tabIndex={-1} aria-hidden="true" className="preview-link__image-link" {...linkProps}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="preview-link__image" src={src} width={WIDTH} height={HEIGHT} alt="" onError={() => setSrc(fallback)} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}
