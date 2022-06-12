@sanity
Feature: Login feature to check

  Scenario Outline: In order to perform login with various methods
    Given user navigates to admin wensite
    When user validates the Homepage
    Then user enters the "<username>" username
    And user enters the "<password>" password
    And user select the age category
      | age      | location |
      | below 18 | India    |
      | above 18 | USA      |
    Then user should "<loginType>" be successfully logged in

    Examples: 
      | username | password | loginType |
      | valid    | valid    |           |
      | invalid  | invalid  | not       |
