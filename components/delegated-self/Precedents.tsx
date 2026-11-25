/* eslint-disable @next/next/no-img-element */
import PreviewLink from "@/components/PreviewLink";
import { LINKS } from "@/lib/links";

const A = "/assets/delegated-self";

/** "The two live precedents": x402 Protocol and World ID cards (Figma 1001:16927). */
export default function Precedents() {
  return (
    <div className="ds-precedents">
      <article className="ds-card ds-precedent">
        <h3 className="ds-precedent__title">x402 Protocol</h3>
        <div className="ds-precedent__media">
          <img src={`${A}/x402.png`} alt="Illustration of the x402 machine-payment protocol" width={676} height={433} />
        </div>
        <div className="ds-precedent__text">
          <p>
            This started as an open standard for machine payments, built by Coinbase on a corner of the web that sat
            unused since the 1990s:
            <br />
            <PreviewLink {...LINKS.paymentRequired402} className="text-link cs-link-blue ds-precedent__link">
              error code 402, &ldquo;Payment Required&rdquo;
            </PreviewLink>
          </p>
          <p>
            The protocol works like a vending machine. It asks for something, gets the price and who to pay, pays, and
            gets it.
            <br />
            <strong>Its selling point is that it removes the need for accounts, logins and subscriptions.</strong>
          </p>
        </div>
      </article>

      <article className="ds-card ds-precedent">
        <h3 className="ds-precedent__title">World ID</h3>
        <div className="ds-precedent__media ds-precedent__media--rounded">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={`${A}/world-id-still.jpg`} />
            <img src={`${A}/world-id.gif`} alt="The World ID Orb, a white sphere that scans a person's face and iris" width={800} height={450} />
          </picture>
        </div>
        <div className="ds-precedent__text">
          <p>
            This identity repository scans your face and iris using an Orb, to confirm you are a living human. It convert
            the images into encrypted code, making you verifiable without revealing your identity.
          </p>
          <p>
            <strong>The verification is done once, its verifiable proof lasts.</strong>
            <br />
            In 2026 it was extended to cover identity for AI agents as well as people.
          </p>
        </div>
      </article>
    </div>
  );
}
