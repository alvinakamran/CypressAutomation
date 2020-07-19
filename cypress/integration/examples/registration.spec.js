/// <reference types="cypress" />


describe('Registration', function(){

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
        
    })

    it('User Registration', function(){

        cy.visit('http://automationpractice.com')

        for (let index = 0; index < this.data.emailAddress.length; index++) {
            var element = this.data.emailAddress
            var element2 = this.data.firstName
            var element3 = this.data.lastName
            var element4 = this.data.address
            
                    
        //sign in
        cy.get('[class="login"]')
        .click()

        //email address
        cy.get('[id="email_create"]')
        .type(element[index])

        //create account button
        cy.get('button[id="SubmitCreate"]')
        .click()


        //Verify sub-heading
        cy.get('[class="account_creation"]')
        .find('h3')
        .eq(0)
        .should('have.text','Your personal information')


        //firstname
        cy.get('[id="customer_firstname"]')
        .type(element2[index])

        //lastname
        cy.get('[id="customer_lastname"]')
        .type(element3[index])

        //password
        cy.get('input[id="passwd"]')
        .type('alvina123')

        //select date
        cy.get('[id="uniform-days"]')
        .find('select')
        .select('17')
        .should('have.value', '17')
     
         //select month
         cy.get('[id="uniform-months"]')
         .find('select')
         .select('10')
         .should('have.value', '10')

         //select year
         cy.get('[id="uniform-years"]')
         .find('select')
         .select('1994')
         .should('have.value', '1994')

         //Verify sub-heading
         cy.get('[class="account_creation"]')
         .find('h3')
         .eq(1)
         .should('have.text','Your address')

         //address
         cy.get('[id="address1"]')
         .type(element4[index])

         //city
         cy.get('[id="city"]')
         .type('Houston')

         //state
         cy.get('[id="uniform-id_state"]')
         .find('select')
         .select('Texas')
         .should('have.value', '43')

         //postal code
         cy.get('[id="postcode"]')
         .type('00111')

         //mobile number
         cy.get('[id="phone_mobile"]')
         .type('+1789228292')

         //register
         cy.get('[id="submitAccount"]')
         .click()

         cy.get('a[class="account"]')
         .find('span')
         .should('have.text',element2[index]+ " " + element3[index])

         cy.get('a[class="logout"]')
         .click()
      
        }


    })





})