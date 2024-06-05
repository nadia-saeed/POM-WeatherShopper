Feature: Test end-to-end weathershopper website
@current
  Scenario Outline: user shops from the website
    Given user is on the main page
    When user chooses the products
    Then order should be successfully placed

    
