
Feature: The Negative Scenario of Internet Guinea Pig Website
Scenario Outline: As a user , I want to verify negative test case
    Given I am on login page to verify negative test case
    When  I login with incorrect usernam and password
    Then  I should see a flash mesage alerting user about wrong user and password