class HomePage {
  private addNoteButton = 'button[data-test=add-note]';
  private notesLink = "a[href='/notes']";

  visit() {
    cy.visit('/');
  }
  clickAddNote() {
    cy.get(this.addNoteButton).click();
  }

  get navbar() {
    return cy.get('nav');
  }

  get navbarLogo() {
    return cy.get('nav span').contains('Notis.nu');
  }
  get title() {
    return cy.contains('h1', 'Record Your Thoughts, Locally');
  }

  get subtitle() {
    return cy.contains(
      'p',
      'A minimalist voice-first note-taking experience designed for clarity and focus.',
    );
  }
  goToNotesPage() {
    cy.get(this.notesLink).click();
  }
  get notesButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[variant="outline"]');
  }
  get recordButton() {
    return cy.contains('a', 'Record');
  }
  get heroSection(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('app-hero');
  }
  // USP wrapper
  get uspSection() {
    return cy.get('app-usp');
  }

  // Titles
  get uspTrustTitle() {
    return this.uspSection.contains('Built on Trust & Transparency');
  }
  get uspFreeTitle() {
    return this.uspSection.contains('100% Free');
  }
  get uspSecureTitle() {
    return this.uspSection.contains('Completely Secure');
  }
  get uspOpenSourceTitle() {
    return this.uspSection.contains('Open Source');
  }

  // Descriptions
  get uspTrustDesc() {
    return this.uspSection.contains(
      'Your notes, your device, your control. Always.',
    );
  }
  get uspFreeDesc() {
    return this.uspSection.contains(
      'No subscriptions, no hidden costs, no premium features. Everything is completely free, forever.',
    );
  }
  get uspSecureDesc() {
    return this.uspSection.contains(
      'All your notes are stored locally on your device. Nothing is sent to servers. Your privacy is guaranteed.',
    );
  }
  get uspOpenSourceDesc() {
    return this.uspSection.contains(
      'The entire source code is freely available on GitHub. Inspect it, modify it, or contribute to it.',
    );
  }

  // CTA link
  get viewSourceLink() {
    return this.uspSection.contains('a', 'View Source Code');
  }
  get contactSection() {
    return cy.get('app-contact');
  }

  get contactTitle() {
    return this.contactSection.contains('Hey, Got Feedback?');
  }

  get contactSubtitle() {
    return this.contactSection.contains(
      'Your data stays on your device — no tracking, no analytics.',
    );
  }

  get contactBody() {
    return this.contactSection.contains(
      'That means feedback from you is the only way to improve.',
    );
  }

  get contactSignature() {
    return this.contactSection.contains('– Markus');
  }

  get sendFeedbackButton() {
    return this.contactSection.contains('button, a', 'Send Feedback');
  }


  get relativeSection() {
    return cy.get("app-cta");
  }

  get relativeTitle() {
    return this.relativeSection.contains("Turn Your Voice Into Action");
  }

  get relativeSubtitle() {
    return this.relativeSection.contains(
      "Experience a smarter way to capture your thoughts."
    );
  }

  get getStartedButton() {
    return this.relativeSection.contains("button, a", "Get Started");
  }


  // Footer section
  get footer() {
    return cy.get("app-footer");
  }

  get footerBrand() {
    return this.footer.contains("Notis.nu");
  }

  get footerTagline() {
    return this.footer.contains(
      "A minimalist voice-first note-taking experience designed for clarity and focus."
    );
  }

  // Footer navigation links
  get footerHomeLink() {
    return this.footer.contains( "Home");
  }

  get footerNotesLink() {
    return this.footer.contains( "Notes");
  }

  get footerSettingsLink() {
    return this.footer.contains( "Settings");
  }

  get footerConnectLink() {
    return this.footer.contains( "Connect");
  }

  get footerFeedbackLink() {
    return this.footer.contains( "Feedback");
  }

  get footerGithubLink() {
    return this.footer.contains( "GitHub");
  }
}

export default new HomePage();
