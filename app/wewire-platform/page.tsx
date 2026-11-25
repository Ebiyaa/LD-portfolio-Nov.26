import type { Metadata } from "next";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import HeroOverview from "@/components/wewire-platform/mockups/HeroOverview";
import InvestDeals from "@/components/wewire-platform/mockups/InvestDeals";
import DealCard from "@/components/wewire-platform/mockups/DealCard";
import InvoiceDrawer from "@/components/wewire-platform/mockups/InvoiceDrawer";
import FundAccount from "@/components/wewire-platform/mockups/FundAccount";
import PaymentSummary from "@/components/wewire-platform/mockups/PaymentSummary";
import FundWallet from "@/components/wewire-platform/mockups/FundWallet";
import "@/components/wewire-platform/wewire-platform.css";

export const metadata: Metadata = {
  title: "WeWire Customer Platform",
  description:
    "Turning an OTC trading desk into a digital payments platform that hit $3 billion in transaction volumes, by making FX and stablecoins feel familiar.",
};

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "the-problem", label: "The problem" },
  { id: "role-and-contributions", label: "Role & contributions" },
  { id: "design-approach", label: "Design approach" },
  { id: "outcomes-and-impact", label: "Outcomes & impact" },
];

/** WeWire Customer Platform case study (Figma 1001:14472). */
export default function WeWirePlatformPage() {
  return (
    <CaseStudyLayout toc={TOC} tocWidth={170} className="wp-page">
      <CaseStudyHeader
        title="WeWire Customer Platform"
        intro={
          <p>
            Turning an OTC trading desk into a digital payments platform that hit $3 billion in transaction volumes,
            trading across 80+ countries, by making FX and stablecoins feel familiar.
          </p>
        }
        tags={["Fintech", "B2B Web Platform", "Stablecoin", "Cross-border Payments"]}
        meta={[
          { label: "Project type", value: "Fintech - web platform" },
          { label: "Year", value: "2023–2025" },
          { label: "My role", value: "Sole UX Designer" },
          { label: "Client", value: "Wewire Technologies" },
        ]}
      />

      <HeroOverview />

      <CaseStudySection id="overview" title="Overview">
        <p>
          Wewire is a fintech company enabling cross-border payments and multi-currency wallets for businesses operating
          across African and global markets. As a UX Designer, I worked on designing the platform and a component library
          for core wallet, payments, and transaction experiences that supported business growth, regulatory compliance,
          and high-volume financial transactions.
        </p>
      </CaseStudySection>

      <CaseStudySection id="the-problem" title="The problem">
        <p>
          Cross-border transactions can introduce high user anxiety due to the nature of its complex multi-currency
          flows, high financial risk and trust concerns as well as regulatory and compliance requirements. The problem
          deepens further when users with varying levels of financial and digital literacy experience making payments
          across multiple currencies.
        </p>
        <p>
          As Wewire scaled rapidly, the platform needed to support high-volume transactions without friction by migrating
          customers from a simple OTC desk to a fully digitalized payment platform. The new customer dashboard did not only
          seek to make foreign exchange accessible but also maintain an equal or higher level of trust, clarity and speed
          that existing customers experienced with Wewire&apos;s OTC desk transactions.
        </p>
      </CaseStudySection>

      <CaseStudySection id="role-and-contributions" title="My role & contributions">
        <p>
          I led the end-to-end UX design of wallet dashboards, onboarding and payment flows, transaction states and
          banking integrations that required regulatory compliance. This included shaping how balances were displayed,
          how deposits and withdrawals were executed, and how transaction history communicated status and transparency.
        </p>
        <p>
          A large part of my work involved translating complex financial logic - including foreign exchange mechanics and
          stable coin infrastructure - into patterns users already understood from traditional fintech products. I worked
          closely with product managers, engineers, and compliance stakeholders to ensure that every interface balanced
          clarity with regulatory requirements.
        </p>
      </CaseStudySection>

      <div className="cs-grid">
        <InvestDeals />
        <DealCard />
        <InvoiceDrawer />
      </div>

      <CaseStudySection id="design-approach" title="Design approach">
        <p>
          The first version of the product featured virtual wallets in local and foreign currencies with conversion
          functionalities. Users could make payouts through bank and mobile financial service integrations as well as
          deposits in their local currencies across Ghana, Nigeria and Kenya.
        </p>
        <p>
          During these stages, I focused on grounding the product in trust with clarity, feedback, clear information
          hierarchy, confirmation states, error prevention, and micro-interactions that reassured users during deposits,
          withdrawals, and transfers.
        </p>
        <p>
          Subsequent updates included features like virtual cards, invoicing for businesses, crypto checkouts and virtual
          bank accounts by third-party providers. With these concepts introduced, I abstracted unfamiliar stable coin,
          transaction and FX concepts into familiar wallet patterns. Rather than exposing users to technical jargon, I
          designed around mental models they already trusted - balances at the top, clear primary actions, and visible
          transaction histories with status indicators.
        </p>
        <p>
          As the product expanded, I prioritized scalability and consistency by building the Orange Component Library,
          consisting of reusable components that could extend across new features and additional markets.
        </p>
      </CaseStudySection>

      <div className="cs-grid">
        <FundAccount />
        <PaymentSummary />
        <FundWallet />
      </div>

      <CaseStudySection id="outcomes-and-impact" title="Outcomes & impact">
        <p>
          Today, Wewire trades across 80+ countries, offering customers access to 11 currency wallets, including USDC and
          USDT while integrating virtual bank accounts with 3rd party providers in GBP, EURO and USD.
        </p>
        <p>
          During peak trading periods, including a major Black Friday milestone, the platform achieved a 10x increase in
          average daily trading volume and recorded the highest daily trading volume in the company&apos;s history. While
          product growth is always cross-functional, the clarity and reliability of transaction flows played a key role in
          enabling this scale without introducing usability breakdowns.
        </p>
        <p>
          While obtaining licensing and expanding in other markets, the experiences I designed supported the successful
          rollout of Wewire&apos;s stable coin-powered cross-border payment rails, allowing businesses to move funds across
          borders with speed and confidence, while maintaining regulatory compliance and seamless tailored onboarding for
          each market.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
