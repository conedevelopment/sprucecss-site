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
            <AccordionCard title="Who is Spruce For?">
              <p>If you like to handle your CSS/SCSS in separate files and write your code, this tool is for you. It uses just a few helper classes; most [components](/ui/getting-started/introduction/) are drop-ins.</p>
            </AccordionCard>
            <AccordionCard title="It is Modern and Lightweight">
              <p>By modern, we mean it uses new CSS stuff sometimes at the expense of backward compatibility. Fortunately, nowadays, the new CSS features are released in bulk across different vendors.</p>
              <p>With modern CSS, you can solve more with less code. It is around 1000 lines and wights a little. Also, you can choose what things you want to use to make it even smaller.</p>
            </AccordionCard>
            <AccordionCard title="Dark Mode and RTL Support">
              <p>Using modern CSS to handle a dark theme or support a different writing direction (RTL) is more manageable. If you use Spruce CSS the intended way, you will be okay with a new theme or RTL support.</p>
              <p>Everything on this [documentation](/docs/getting-started/introduction/) page or under the [components](/ui/getting-started/introduction/) supports them with just a little code.</p>
            </AccordionCard>
            <AccordionCard title="It Is Built on Sass">
              <p>Sass can help a lot when writing a CSS framework or using one. You can use Spruce as a standalone CSS file, too, but to maximalize its potential, we suggest Sass. [For a simple compile setup](http://localhost:8000/blog/the-simplest-sass-compile-setup/), check out our related blog post.</p>
            </AccordionCard>
          </AccordionList>
        </div>
      </div>
    </div>
  );
}
