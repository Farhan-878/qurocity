import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="faq-content">
      <div className="container">
        <div className="faq-content-wrapper">
          <h1 data-aos="fade-down">Frequently Asked Questions</h1>
          <div className="faq-box-wrapper" data-aos="fade-up">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  When is the best age to start learning foreign languages?
                </Accordion.Header>
                <Accordion.Body>
                  As is the case with any other language, a person’s age has an
                  effect on their ability to learn new ones. But that only means
                  anyone can learn – no matter how old or young they are. Kids
                  and young adults learn faster since they can easier pick up
                  new accents and comprehend new sounds. Adults learn smarter as
                  their attention spans are longer.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Why are online platforms the best medium for learning foreign
                  languages?
                </Accordion.Header>
                <Accordion.Body>
                  The world has gone remote since 2020. Even if the pandemic
                  hadn’t struck, it would have been a matter of time before the
                  learning journeys went the digital route. Because let’s face
                  it – the future of language learning is going to be
                  increasingly contactless. People have lesser time than before
                  to master it. Hence, they rely on platforms like Qurocity to
                  pursue travel and career opportunities from the comfort of
                  their own homes.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  But why can’t I just learn foreign languages by myself?
                </Accordion.Header>
                <Accordion.Body>
                  It is possible to learn a little from various sources around
                  you. For example, you may catch up on some phrases from songs
                  you listened to or through something someone said during a TV
                  show. To gain fluency in the language, however, you would need
                  to gain a strong understanding of grammar along with general,
                  linguistic, and pragmatic competencies. Doing that by yourself
                  Is ten times as hard and would be just as long. By the end of
                  it, there are no proper evaluation methods to assess where you
                  truly stand.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Does Qurocity cover critical language skills?
                </Accordion.Header>
                <Accordion.Body>
                  We make sure that you can write, read, listen, and speak the
                  language at the end of the course. We offer various
                  proficiency levels in each language, but we cover grammar,
                  vocabulary, conversational skills, etc.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How does Qurocity select language teachers?
                </Accordion.Header>
                <Accordion.Body>
                  We follow a thorough verification process before onboarding
                  teachers, and we have an uncompromising stance on only working
                  with native language specialists.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  What would be my tech needs to attend online classes at
                  Qurocity?
                </Accordion.Header>
                <Accordion.Body>
                  You require a laptop, tablet or mobile phone with a WIFI
                  connection, along with a web camera, a microphone, and a
                  speaker.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What is the most effective way to attend a session?
                </Accordion.Header>
                <Accordion.Body>
                  We have found that a laptop or a desktop computer facilitates
                  the smoothest learning experience.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Do you issue a certificate at the end of the course?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, all our students who complete the course get issued an
                  accredited certificate.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  What is the easiest way to contact Qurocity?
                </Accordion.Header>
                <Accordion.Body>
                  Email: partner@qurocity.ai 9373902340
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
