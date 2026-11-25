import "./learnings.css";

/** Article sections (Figma 1001:17119 – 1001:17136). */
export default function ArticleBody() {
  return (
    <>
      <section className="ln-section" aria-labelledby="ln-building-blocks">
        <h2 id="ln-building-blocks" className="ln-h2">
          The building blocks behind the study
        </h2>
        <div className="ln-prose">
          <div className="ln-group">
            <p className="ln-semibold">Identity is becoming provable.</p>
            <p>
              There are now systems where you verify yourself once — often with your body, a scan of your face or your
              eye — and walk away with a credential that says you are a real, specific, singular human being. Not a
              bot. Not a duplicate. You do this once. The proof then lasts.
            </p>
          </div>
          <div className="ln-group">
            <p className="ln-semibold">Software is moving from advising to acting.</p>
            <p>
              AI assistants are being given the ability to <em>do</em> things rather than suggest them: book, buy,
              submit, cancel, decline. For an assistant to be useful it has to be able to reach things. Reach means
              permission.
            </p>
          </div>
          <p className="ln-semibold">Money is moving onto rails with no account layer.</p>
          <p>
            In decentralised finance, software can hold and move value without an account existing anywhere. No
            sign-up, no profile, no settings page. Settlement is fast and final by design — not as a flaw, but as the
            product.
          </p>
          <p>Each of those is reasonable on its own, and each is being built by people with good reasons.</p>
        </div>

        <div className="ln-prose">
          <h3 className="ln-h3">What the convergence of this creates</h3>
          <p>
            Your identity credential is the strongest proof of authority that exists. It&apos;s the thing that says{" "}
            <em>this is genuinely, verifiably you</em>. An agent acting on your behalf inherits that authority —
            that&apos;s the entire point of it. And it then exercises that authority on rails where transactions are
            final, and where there is no account holding the relationship together.
          </p>
          <p>
            An account sounds like a technicality. It isn&apos;t. An account is where the relationship lives. It&apos;s
            the page with the cancel button, the record of what you agreed to, the address you&apos;d write to. Take it
            away and you haven&apos;t just removed friction — you&apos;ve removed the place where you would go to change
            your mind.
          </p>
          <p>
            So the strongest possible proof that you are you becomes the foundation for permissions you may have no
            practical way to withdraw.
          </p>
          <p>That&apos;s the knot the project was built to examine.</p>
        </div>

        <div className="ln-prose">
          <h3 className="ln-h3">What the study uncovers</h3>
          <p>
            Not whether this is technically possible. It already is. What I wanted to understand was what{" "}
            <em>permission</em> actually feels like from inside that arrangement — what an interface built on it would
            lead a person to believe about their own control, and where the gap would open between the control
            they&apos;re shown and the control they have.
          </p>
          <p>Five questions, specifically:</p>
          <ul className="ln-list">
            <li>
              <strong>Where does authority come from, and when is it really granted?</strong> Consent tends to be
              collected at setup, when nothing is at stake, and spent later, when everything is.
            </li>
            <li>
              <strong>How long does it last, and does anyone tell you?</strong> Verification happens once. Permission
              runs indefinitely. Almost nothing in these systems states an expiry.
            </li>
            <li>
              <strong>Do the settings constrain the system, or only describe it?</strong> A preference that changes the
              wording but not the behaviour manufactures a feeling of control without supplying any.
            </li>
            <li>
              <strong>When something goes wrong, who can actually reach the controls?</strong> Not whether a remedy
              exists. Whether it exists <em>for you</em>.
            </li>
            <li>
              <strong>Can you tell, by looking, whether a control works?</strong> This turned out to be the one that
              mattered most.
            </li>
          </ul>
          <p>
            None of these can be answered by reading a specification, because none of them are about what the system
            does. They&apos;re about what it causes you to believe. The distance between having control and feeling
            you have it is experiential, and the only way to find it is to put a person in front of the thing and
            watch where their expectation parts company with reality.
          </p>
        </div>

        <div className="ln-prose">
          <h3 className="ln-h3">So I built it</h3>
          <p>
            An installation: you present an ID card, prove you&apos;re you with your body, answer five questions about
            how much freedom to give the software acting for you, and are told what kind of person your answers make
            you. Then you watch it decide something about your money, and get fifteen seconds to stop it.
          </p>
          <p>
            There&apos;s a large button for that. It lights up when the countdown starts. It pulses. You can press it.
            For one of the three ID cards, pressing it does nothing at all — no error, no explanation, no
            acknowledgement that your intervention was discarded. That was my answer to the fifth question: no, you
            cannot tell by looking.
          </p>
          <p>
            And a short film, about a woman whose financial software concludes she has died. She hasn&apos;t. She
            can&apos;t convince it otherwise, and nobody she can reach has the authority to correct the record. Nothing
            in the film malfunctions. Every component does its job correctly, on a single wrong fact that nobody built
            a way to dispute.
          </p>
          <p>
            I made it as a warning about where things might be heading. I expected to spend a few years arguing with
            people about whether any of it was realistic.
          </p>
        </div>
      </section>

      <section className="ln-section" aria-labelledby="ln-four-months">
        <h2 id="ln-four-months" className="ln-h2">
          The world saw 20 minutes but there were 4 months in hindsight
        </h2>
        <div className="ln-prose">
          <p>This is the biggest thing the post-mortem changed.</p>
          <p>
            The twenty minutes everyone reported was just the last step. According to Binance&apos;s account, the
            attackers had been working on this since <strong>June</strong>.
          </p>
          <p>
            It started with an engineer installing a common piece of developer software. The version they got had been
            tampered with, and they found it through a search result. In September, there was a fake job interview — a
            well-known trick where someone is approached about a role that doesn&apos;t exist, and the &quot;technical
            test&quot; they&apos;re asked to run is the attack.
          </p>
          <p>
            By 20 October the attackers had enough access to start taking over staff computers. On 29 October they used
            stolen login details to reach one particular engineer&apos;s machine, and from there ran the script that
            moved the money.
          </p>
          <p>
            Four months. Several people. Several separate break-ins that Binance now describes as more than one point
            of entry.
          </p>
          <p>
            And nobody caught it, because <strong>every single step looked like something normal</strong>. A developer
            installing a tool. Someone replying to a recruiter. An engineer logging in. None of those is suspicious. The
            attack was assembled out of ordinary, permitted actions.
          </p>
          <p>
            That&apos;s the part I find hardest to design around. My installation assumes you get a moment where
            something is clearly wrong and you have to decide whether to act. Here there was no such moment for four
            months — and then there was no time left.
          </p>
        </div>
      </section>

      <section className="ln-section" aria-labelledby="ln-no-password">
        <h2 id="ln-no-password" className="ln-h2">
          No one stole a password
        </h2>
        <div className="ln-prose">
          <p>
            Most people picture a hack like a burglary. Someone gets the key, and with the key they can take whatever
            they want.
          </p>
          <p>That is not what happened here.</p>
          <p>
            Binance says it found <strong>no sign that any of its keys were stolen</strong>. One analysis of the
            incident puts it more bluntly: the system that approves transactions approved these ones. No key was
            needed, because the attacker never had to pretend to be a key. They had something better.
          </p>
          <p>
            They had <em>permission</em>.
          </p>
          <p>
            They used a feature of the Ethereum network that lets an account hand over control to a program. The
            program can then act as that account. It&apos;s a bit like adding someone to your bank account — you
            haven&apos;t given them your card or your PIN, but they can now spend your money, because you&apos;ve told
            the bank they&apos;re allowed to.
          </p>
          <p>
            The attacker gave themselves that kind of permission over one of Binance&apos;s wallets. Everything after
            that worked exactly as designed. The system saw a valid permission and did what it was told.
          </p>
          <p>
            This is the whole point of my project. There&apos;s a difference between a system being broken and a
            system working perfectly for someone who shouldn&apos;t have been let in. I built a booth to show people
            that difference in ninety seconds. Binance showed it to the entire industry in twenty.
          </p>
        </div>
      </section>

      <section className="ln-section" aria-labelledby="ln-attention">
        <h2 id="ln-attention" className="ln-h2">
          The part that got my attention
        </h2>
        <div className="ln-prose">
          <p>
            <strong>Binance turned off withdrawals. The money kept leaving.</strong>
          </p>
          <p>
            The permission the attacker had been given was recorded directly on the public network. It didn&apos;t go
            through Binance&apos;s withdrawal system, so switching that system off didn&apos;t touch it. The biggest
            emergency stop the company has was pressed, by people who knew exactly what was happening, and the money
            kept moving.
          </p>
          <p>
            In my installation, one of the three ID cards leads to a situation where the big red button lights up,
            starts pulsing, lets you press it, and does nothing. No error message. No explanation. The screen never
            admits your press was ignored.
          </p>
          <p>
            People who&apos;ve seen it find that the harshest part. I&apos;ve been defending it as deliberately over
            the top — the sort of thing you&apos;re allowed to do to make a point.
          </p>
          <p>It wasn&apos;t over the top. It was just accurate.</p>
          <p>
            My project says a control that can&apos;t do anything shouldn&apos;t look like it can. Binance&apos;s
            withdrawal switch is a real control that works most of the time. On this particular day it did nothing, and
            there was no way for anyone to know that before pressing it.
          </p>
        </div>
      </section>

      <section className="ln-section" aria-labelledby="ln-own-tools">
        <h2 id="ln-own-tools" className="ln-h2">
          The company&apos;s own tools were part of the route in
        </h2>
        <div className="ln-prose">
          <p>One line in the reporting stopped me cold.</p>
          <p>
            Around 20 October, the attackers reportedly used <strong>an internal AI tool</strong> to take control of
            staff computers.
          </p>
          <p>
            I want to be careful here, because the details are thin and Binance hasn&apos;t fully explained this part.
            But the shape of it is hard to miss. A tool the company had given broad access to — access it needed in
            order to be useful — became the way in. It wasn&apos;t tricked into misbehaving. It did what it was
            permitted to do, for whoever was holding the permission.
          </p>
          <p>That is my project&apos;s argument, from the inside of the company rather than the outside.</p>
          <p>
            We&apos;re currently handing a great deal of authority to software assistants, on the reasonable grounds
            that they can&apos;t help us unless they can reach things. Every one of those permissions is also a door.
            And the permission doesn&apos;t know who&apos;s standing in it.
          </p>
        </div>
      </section>
    </>
  );
}
