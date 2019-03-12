Feature: Employee management API testing using BDD framework
				 As user i want to check that all the API functionality is working or not
				 I want to check GET, POST, PUT, DELETE methods in API provided
				 
Scenario Outline: I want to check GET functionality for particular ID 
Given I have Employee Management API up and running
When I give "<ID>" with API URI 
Then the status code should be "<Status Code>"
Examples: 
		| ID 	 | Status Code|
    | 22 	 | 200				|
    

Scenario Outline: I want to check POST functionality 
Given I have Employee Management API up and running
When I give "<ID>" "<Name>" "<Profession>" with API URI
Then the status code should be "<Status Code>"
Examples:
		| ID 	 | Name 				|| Profession	 | Status Code|
    | 63 	 | Ravi Kumar 	||Data Analyst | 200				| 
    | 56 	 | Manoj Tivari	||Advocate		 | 200  			|