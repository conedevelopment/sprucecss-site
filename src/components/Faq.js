import { Link } from 'gatsby';
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
            <AccordionCard title="Who is Spruce CSS for?">
              <p>Spruce CSS is small and tries not to be in your way. It gives you a solid foundation and utilities, but the only included components are forms (which you can opt out of).</p>
              <p>It is for you if you like to handle your CSS/SCSS in separate files and write your code. It uses just a few helper classes; most <Link to="/ui/getting-started/introduction/">components</Link> are drop-ins.</p>
            </AccordionCard>
            <AccordionCard title="It is Modern and Lightweight">
              <p>By modern, we mean it uses new CSS stuff sometimes at the expense of backward compatibility. Fortunately, nowadays, the new CSS features are released in bulk across different vendors.</p>
              <p>With modern CSS, you can solve more with less code. It is around 1400 lines and weights a little, and you can choose what things you want to use to make it even smaller.</p>
            </AccordionCard>
            <AccordionCard title="Dark Mode and RTL Support">
              <p>Using modern CSS to handle a dark theme or support a different writing direction (RTL) is more manageable. If you use Spruce CSS the intended way, you will be okay with a new theme or RTL support.</p>
              <p>Everything on this <Link to="/docs/getting-started/introduction/">documentation</Link> page or under the <Link to="/ui/getting-started/introduction/">components</Link> supports them with just a little code.</p>
            </AccordionCard>
            <AccordionCard title="It Is Built on Sass">
              <p>Sass can help a lot when writing a CSS framework or using one. You can use Spruce as a standalone CSS file, too, but to maximalize its potential, we suggest Sass. <Link to="/blog/the-simplest-sass-compile-setup/">For a simple compile setup</Link>, check out our related blog post.</p>
            </AccordionCard>
          </AccordionList>
        </div>
      </div>
    </div>
  );
}
