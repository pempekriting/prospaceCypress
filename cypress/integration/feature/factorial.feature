Feature: Factorial Calculation

    As a User, I can do factorial calculate and get the correct result

    Scenario: Input with correct integer
    Given the user is already in the factorial calcuator
    When the user input the 5 as data
    Then the result should be the correct

    Scenario Outline: Input with incorrect format data
    Given the user is already in the factorial calcuator
    When the user input the <valueData> as data
    Then the alert should be pop up
    Examples:
        | valueData |
        | 1.4  |
        | 1.45 |
        |{backspace}|
        |test|
        |<script>alert(1)</script>|
        |00000000000000000000000|
