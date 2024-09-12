describe('React App', () => {
    beforeEach(() => {
      // Ensure the app starts with a fresh state
      cy.visit('/');
    });
  
    it('should display loading state by default', () => {
      // Assert that the loading state is displayed initially
      cy.contains('Loading...');
    });
  
    it('should display posts after fetching from API', () => {
      // Wait for the data to be fetched and rendered
      cy.wait(1000); // Adjust this if needed based on the loading time
      
      // Assert that posts are displayed after fetching
      cy.get('div').should('have.length.greaterThan', 0); // Adjust if necessary to match rendered elements
  
      // Check for the presence of title and body
      cy.get('.title').should('exist');
      cy.get('.body').should('exist');
  
      // Check specific title and body text
      cy.get('.title').first().should('contain.text', 'Title:');
      cy.get('.body').first().should('contain.text', 'Body:');
    });
  });
  