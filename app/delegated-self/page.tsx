/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PreviewLink from "@/components/PreviewLink";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import Precedents from "@/components/delegated-self/Precedents";
import WatchFilm from "@/components/delegated-self/WatchFilm";
import { PhotoStrip, ProcessPhotos } from "@/components/delegated-self/Photos";
import { LINKS } from "@/lib/links";
import "@/components/delegated-self/delegated-self.css";

export const metadata: Metadata = {
  title: "The Delegated Self",
  description:
    "Speculating on AI agents, digital identity & financial agency: a Masters thesis booth installation and fictional film.",
};

const A = "/assets/delegated-self";

const TOC = [
  { id: "background", label: "Background" },
  { id: "removing-the-middleman", label: "Thirty years of removing the middleman" },
  { id: "live-precedents", label: "The two live precedents" },
  { id: "the-convergence", label: "What the convergence creates" },
  { id: "research-through-design", label: "Exploring the convergence using research-through-design" },
  { id: "system-design", label: "System design" },
  { id: "the-fictional-film", label: "The fictional film" },
  { id: "prototype-findings", label: "What the prototype revealed" },
  { id: "limitations", label: "Limitations" },
  { id: "design-recommendations", label: "Design recommendations" },
];

/** The Delegated Self case study (Figma 1001:16843). */
export default function DelegatedSelfPage() {
  return (
    <>
      <CaseStudyLayout toc={TOC} tocWidth={227} className="ds-page">
        <section id="background" className="ds-background" aria-label="Background">
          <CaseStudyHeader
            title="The Delegated Self"
            intro={
              <>
                <p>
                  Speculating on AI Agents, Digital Identity &amp; Financial Agency. We are starting to let software act for
                  us. It buys things, pays bills and makes decisions. This work was produced as part of my Masters Thesis
                  Project and displayed at the <PreviewLink {...LINKS.dawnExhibition}>Dawn Exhibition</PreviewLink>.
                </p>
                <p>
                  Extrapolating from the x402 and World ID integration, this installation poses a simple question:{" "}
                  <strong>
                    Once you&apos;ve handed over human agency to an autonomous software, how do you get it back?
                  </strong>
                </p>
              </>
            }
            tags={[
              "Speculative Design",
              "AI & Automation",
              "Interaction Design",
              "Design Research",
              "Exhibition",
              "Fictional Film",
              "Physical Computing",
              "Systems Design",
            ]}
            meta={[
              { label: "Context", value: "Masters Thesis Project" },
              { label: "Year", value: "2026" },
              { label: "My role", value: "Sole Designer, Researcher, Maker" },
              { label: "Outputs", value: "Booth Installation & Fictional Film" },
            ]}
          />

          <WatchFilm placement="above" />
          <figure className="cs-figure">
            <div className="ds-hero">
              <img
                src={`${A}/booth.jpg`}
                alt="The Delegated Self booth: a laptop, a glowing hand-scan pad and an orange sensor on a blue-lit desk"
                width={2040}
                height={1530}
                fetchPriority="high"
              />
            </div>
            <figcaption className="cs-caption">The finished booth, photographed straight on in the exhibition space</figcaption>
          </figure>
        </section>

        <CaseStudySection id="removing-the-middleman" title="Thirty years of removing the middleman">
          <p className="ds-measure">
            To understand why the x402 and World ID integration at the heart of this project exist, you have to follow a
            long argument that financial software has been having with itself.
          </p>
          <ol className="cs-list ds-measure">
            <li>
              <strong>Money becomes software:</strong> Bitcoin showed that value could move between two people without a
              bank in the middle. Then Ethereum went even further and made money programmable using contracts that hold and
              release funds automatically, according to preset rules, with no deciding institution.
            </li>
            <li>
              <strong>An entire financial system:</strong> Lending, exchange, savings and insurance are all being rebuilt as
              code that people can use without applying to anyone or any institution. This is what &ldquo;DeFi&rdquo;,
              decentralized finance, means.
            </li>
            <li>
              <strong>Wallets get opinions:</strong> Rather than approving each action yourself, you set rules for spending
              limits and standing permissions which are conditions under which software may act without asking. Which makes
              things quite convenient but judgement moves from you to a policy you wrote just once.
            </li>
            <li>
              <strong>The software becomes the customer:</strong> It is no longer a tool you use to pay, but a party that
              pays on its own behalf, continually and fast enough, enabled by your rules and credentials.
            </li>
          </ol>
        </CaseStudySection>

        <CaseStudySection id="live-precedents" title="The two live precedents">
          <Precedents />
        </CaseStudySection>

        <CaseStudySection id="the-convergence" title="What the convergence creates">
          <div className="cs-paras">
            <p>
              DeFi spent years taking the institution out of the middle. Proof of personhood puts the human right back in,
              a verified single person with no bank behind them. Machine payments then hand that person&apos;s authority to
              software that spends without accounts.
            </p>
            <p>
              Stack the three and you get a verified human identity, attached to software that can spend for them, inside
              a system deliberately built without accounts or middlemen. An account is where you go when you change your
              mind. It&apos;s the page with the cancel button, the record of what you agreed to, the address you would
              email when something goes wrong. An institution is the same thing with a phone number. However, both were
              removed on purpose, as features of DeFi; without necessarily addressing the reason people needed them.
            </p>
          </div>
          <blockquote className="ds-quote">
            <p>You prove who you are once, the permission lasts, and there&apos;s nobody left to tell.</p>
          </blockquote>
          <p className="ds-after-quote">
            We see a live precedent of this kind of arrangement in Australia&rsquo;s automated system called Robodebt, which
            worked out welfare debts for hundreds of thousands of people and got a lot of them wrong. Although there was an
            appeals process documented on paper, almost nobody could actually reach it. The appeals channel was there in a
            shape that looked usable and it didn&rsquo;t work the way it was expected to.
          </p>
        </CaseStudySection>

        <CaseStudySection id="research-through-design" title="Exploring the convergence using research-through-design">
          <div className="cs-paras">
            <p>
              What I wanted to understand is what it feels like to be handed a choice that does not work the way it is
              expected. Prior to building this, I tried asking friends and colleagues to imagine giving control to software
              and all I got was their opinion about software. The problem was hypothetical and needed experiencing it to
              understand the controversies involved and the exclusions they form.
            </p>
            <p>
              So I used researched this by reproducing the problem through a speculative future product. By making it, I
              paid close attention to what reproducing it uncovers, and documented my decisions and the reasons behind them.
            </p>
          </div>
          <p>
            This allowed me to explore failures that I would eliminate under a normal research frame. I explored failures
            ranging from a sensor that wouldn&apos;t read, to a threshold that triggered on its own once the room warmed up.
            These told me something about what happens when an identity check meets a real body in a real room.
          </p>
        </CaseStudySection>

        <ProcessPhotos />

        <CaseStudySection id="system-design" title="System design">
          <div className="cs-paras">
            <p>
              The third and final iteration of the prototype consisted of different elements that communicated with each
              other. An Arduino board wired to an LED strip through 3 MOSFETs, a pinball button, 4 LEDs and 2 thermal
              sensors. An NFC reader received ID scan information through NFC tags assigned to each ID.
            </p>
            <p>
              A laptop ran the projection screen, the NFC card reader and the web-socket that received the card data and
              advanced the interaction. I used the Arduino board and a small circuit to everything physical, the sensors and
              lights and button, so that if the screen crashes the room doesn&apos;t freeze in the wrong state. A standard
              visit to the booth took about ninety seconds, where users tap their assigned ID card, rest their hands until
              they&rsquo;re verified, answer a set of questions, and watch what their custodian or agent decides to do.
              Then, they get fifteen seconds to intervene.
            </p>
          </div>
          <div className="ds-diagrams">
            <figure className="ds-card ds-diagram">
              <figcaption>Interactive installation setup</figcaption>
              <img
                src={`${A}/diagram-setup.png`}
                alt="Diagram of the installation setup: the computer, NFC reader, microcontroller, sensors, lights and button and how they connect"
                width={1600}
                height={1175}
                loading="lazy"
              />
            </figure>
            <figure className="ds-card ds-diagram">
              <figcaption>Component wiring diagram</figcaption>
              <img
                src={`${A}/diagram-wiring.png`}
                alt="Wiring diagram of the Arduino, MOSFETs, LED strip, LEDs, thermal sensors and pinball button"
                width={1600}
                height={1290}
                loading="lazy"
              />
            </figure>
          </div>
        </CaseStudySection>

        <CaseStudySection id="the-fictional-film" title="Estate Mode, the fictional film" size="large">
          <p>
            The installation gives you ninety seconds to experience the system. But the real damage these systems do
            doesn&apos;t happen in ninety seconds. It happens over weeks, to somebody who can&apos;t access paths to
            recourse. The installation asks what it feels like to delegate authority to automated systems while the film
            asks what happens when the record is wrong and nobody can fix it. The harm portrayed in the fictional film comes
            from the design working exactly as intended on a fact nobody built a way to argue with.
          </p>
        </CaseStudySection>

        <figure className="ds-film">
          <img
            src={`${A}/film-still.jpg`}
            alt="Film still: a dim data-centre corridor captioned “Decentralized Compliance Registry, Protocol Data Center, 03:44:47”"
            width={2040}
            height={1165}
            loading="lazy"
          />
        </figure>
        <WatchFilm placement="below" />

        <CaseStudySection id="prototype-findings" title="What the prototype revealed">
          <ol className="cs-list">
            <li>A visible button does not count as having a say</li>
            <li>Detailed settings do not necessarily give people control</li>
            <li>The making of the prototype revealed findings prior to user testing</li>
          </ol>
        </CaseStudySection>

        <CaseStudySection id="limitations" title="The project’s limitations">
          <div className="ds-tight">
            <p>
              This project describes a problem and builds the prototype to reproduce the scenarios. It doesn&apos;t in
              itself propose a solution, and several things I&apos;ve claimed here are untested.
            </p>
            <ol className="cs-list cs-list--bold">
              <li>
                <strong>Nobody has been formally observed using it:</strong> Without an empirical study, everything here is
                about the design of the system, rather than the behavior of the people living inside of it. Due to the
                nature of the exhibition, I did not get to formally observe how visitors feel about the unresponsive button
                or whether they actually notice the rigged tie-break from the sensors.
              </li>
              <li>
                <strong>It only covers one visit:</strong> The real harm from handing over control builds up over months.
                Ninety seconds with the speculative prototype can show you the shape of that harm but not the entire weight
                and impact of it.
              </li>
              <li>
                <strong>The solution is not baked into this design:</strong> I&apos;ve established through this research
                that asking permission at sign-up is asking at the wrong moment. What hasn&rsquo;t been proved is what good
                permission looks like.
              </li>
            </ol>
          </div>
        </CaseStudySection>

        <CaseStudySection id="design-recommendations" title="Guidelines I’ll give anyone building the solution">
          <div className="ds-gap-12">
            <p>
              These come out of decisions in the build, and they&apos;re meant to be usable by anyone designing a product
              that acts on somebody&apos;s behalf.
            </p>
            <ol className="cs-list cs-list--bold">
              <li>
                <strong>Ask for permission when it actually matters</strong>
              </li>
              <li>
                <strong>Don&apos;t make something look usable if it isn&apos;t</strong>
              </li>
              <li>
                <strong>If granular settings exist, they have to actually change something</strong>
              </li>
            </ol>
          </div>
        </CaseStudySection>
      </CaseStudyLayout>

      <PhotoStrip />
    </>
  );
}
