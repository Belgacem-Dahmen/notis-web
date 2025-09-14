import HomePage from '../../pages/HomePage';

describe('Hopme Page Tests ', () => {
  beforeEach(() => {
    HomePage.visit();
  });
  it('should display a nabvbar', () => {
    HomePage.navbar.should('be.visible');
  });
  it('Should display a logo in the navbar', () => {
    HomePage.navbarLogo.should('be.visible');
  });
  it('should contains link to Home page', () => {
    HomePage.navbar.find('a[href="/"]').should('be.visible');
  });
  it('should contains link to Notes page', () => {
    HomePage.navbar.find('a[href="/notes"]').should('be.visible');
  });
  it('should display hero section', () => {
    HomePage.heroSection.should('be.visible');
  });
  it('should display a title', () => {
    HomePage.title.should('be.visible');
  });
  it('should display a subtitle', () => {
    HomePage.subtitle.should('be.visible');
  });
  it('should display Record Button', () => {
    HomePage.recordButton.should('be.visible');
  });
  it('should display view Notes Button', () => {
    HomePage.notesButton.should('be.visible');
  });
  describe('USP Section', () => {
    it('should show the USP section', () => {
      HomePage.uspSection.should('be.visible');
    });

    it('should show Trust & Transparency block', () => {
      HomePage.uspTrustTitle.should('be.visible');
      HomePage.uspTrustDesc.should('be.visible');
    });

    it('should show 100% Free block', () => {
      HomePage.uspFreeTitle.should('be.visible');
      HomePage.uspFreeDesc.should('be.visible');
    });

    it('should show Completely Secure block', () => {
      HomePage.uspSecureTitle.should('be.visible');
      HomePage.uspSecureDesc.should('be.visible');
    });

    it('should show Open Source block', () => {
      HomePage.uspOpenSourceTitle.should('be.visible');
      HomePage.uspOpenSourceDesc.should('be.visible');
    });

    it('has a View Source Code link to GitHub', () => {
      HomePage.viewSourceLink
        .should('be.visible')
        .and('have.attr', 'href')
        .and('match', /github\.com/i);
    });
  });
  describe('Contact Section', () => {
    it('Should display the contact section', () => {
      HomePage.contactSection.should('be.visible');
    });

    it('Should show the contact title', () => {
      HomePage.contactTitle.should('be.visible');
    });

    it('Should show the subtitle about privacy', () => {
      HomePage.contactSubtitle.should('be.visible');
    });

    it('Should show the body message', () => {
      HomePage.contactBody.should('be.visible');
    });

    it('Should display the signature', () => {
      HomePage.contactSignature.should('be.visible');
    });

    it('Should have a Send Feedback button', () => {
      HomePage.sendFeedbackButton
        .should('be.visible')
        .contains('Send Feedback');
    });
  });
  describe('Relative CTA Section', () => {
    it('Should display the Relative section', () => {
      HomePage.relativeSection.should('be.visible');
    });

    it('Should display the title', () => {
      HomePage.relativeTitle.should('be.visible');
    });

    it('Should display the subtitle', () => {
      HomePage.relativeSubtitle.should('be.visible');
    });

    it('Should have a Get Started button', () => {
      HomePage.getStartedButton.should('be.visible');
    });

    it('Should navigate correctly when clicking Get Started', () => {
      HomePage.getStartedButton.click();
      cy.url().should('include', '/notes/create'); // 👈 adjust expected path
    });
  });
  describe.only("Footer", () => {
    it("Should display the footer", () => {
    HomePage.footer.should("be.visible");
  });

  it("Should display brand and tagline", () => {
    HomePage.footerBrand.should("be.visible");
    HomePage.footerTagline.should("be.visible");
  });

  it("Should have navigation links", () => {
    HomePage.footerHomeLink.should("be.visible")
    HomePage.footerNotesLink.should("be.visible")
    HomePage.footerSettingsLink.should("be.visible")
    HomePage.footerConnectLink.should("be.visible")
    HomePage.footerFeedbackLink.should("be.visible")
    HomePage.footerGithubLink.should("be.visible")
  });
});
});
