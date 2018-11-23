import React from 'react';

import BaseInput from '../components/BaseInput';
import FlatButton from '../components/FlatButton';
import ThemeButton from '../components/ThemeButton';

const ThemedInput = props => <BaseInput {...props} theme="dark"></BaseInput>

function reset(event) {
  event.target.querySelectorAll('input.notempty, textarea.notempty').forEach(input => {
    input.classList.remove('notempty');
  })
}

const Hire = () => (
  <section className="hire">
    <div className="before"></div>
    <h1 className="hire__title title">Contact Form</h1>
    <p className="hire__subtitle">Get in touch about a project</p>
    <form acceptCharset="utf-8" action="https://usebasin.com/f/a8eea5a304e0" method="post" onReset={reset}>
      <ThemedInput label="Name *" placeholder="Josephine Smalls" type="text" name="name" aria-required="true" required={true}></ThemedInput>
      <ThemedInput label="Email *" placeholder="josephine.smalls@soylent.com" type="email" name="email" spellCheck="false" aria-required="true" required={true}></ThemedInput>
      <ThemedInput label="Phone" placeholder="(432) 861-7975" type="tel" name="phone" pattern="^\d{3}-\d{3}-\d{4}$|^\d{10}$|^\(\d{3}\) \d{3}-\d{4}$|^\(\d{3}\) \d{3} \d{4}$|^\d{3} \d{3} \d{4}$" spellCheck="false" aria-required="false"></ThemedInput>
      <ThemedInput label="Website" placeholder="https://soylent.com" type="url" name="website" spellCheck="false" aria-required="false"></ThemedInput>
      <ThemedInput label="Message" placeholder="Leave a message for me about what you want to talk about." type="textarea" name="message" aria-required="false" rows="4"></ThemedInput>
      <section role="group" className="actions">
        <ThemeButton theme="dark" type="submit" className="submit-button">SUBMIT INFORMATION</ThemeButton>
        <FlatButton theme="dark" round="" type="reset" className="reset-button">CLEAR FORM</FlatButton>
      </section>
    </form>
  </section>
);

export default React.memo(Hire);
