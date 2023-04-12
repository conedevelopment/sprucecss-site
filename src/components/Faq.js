import AccordionCard from './card/Accordion';
import AccordionList from './AccordionList';
import Heading from './Heading';
import React from 'react';

export default function Faq() {
  return (
    <div className="faq">
      <div className="container container--narrower">
        <div className="faq__inner">
          <Heading
            type="center"
            title="Good to Know"
            description="Spruce CSS in nutshell."
          />
          <AccordionList>
            <AccordionCard title="Why Make Another CSS Framework?">
              <p>As you may know, there are many CSS frameworks (hundreds of them, and a lot of them are not maintained today). Everybody can choose one that suits their work style or project requirements. So why make another one? It is certainly not because we can do it better but because we want to do it our way. We want to be in control and make decisions.</p>
            </AccordionCard>
            <AccordionCard title="It Is Opinionated">
              <p>Each system is opinionated but on a different level; this is valid for Spruce too. We don’t want to vote for (strictly) any particular solution (because there is always more than one), but we will show you what we think is the best for us (and maybe for you too). We don’t believe there is a good or bad solution, but we can learn from any of them.</p>
            </AccordionCard>
            <AccordionCard title="We Left the Grid Out">
              <p>One controversial decision we made with Spruce is to leave a classical grid system out. Because of the late CSS layout model developments like Flexbox and Grid, we think it can be eliminated; this doesn’t mean that we won’t show you how to make layouts with ease, but we try to make it the modern way.</p>
            </AccordionCard>
          </AccordionList>
        </div>
      </div>
    </div>
  );
}
