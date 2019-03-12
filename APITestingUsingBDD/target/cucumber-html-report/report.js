$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EmployeeManagementAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Employee management API testing using BDD framework",
  "description": "\t\t As user i want to check that all the API functionality is working or not\r\n\t\t I want to check GET, POST, PUT, DELETE methods in API provided",
  "id": "employee-management-api-testing-using-bdd-framework",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "I want to check GET functionality for particular ID",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-get-functionality-for-particular-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have Employee Management API up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I give \"\u003cID\u003e\" with API URI",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the status code should be \"\u003cStatus Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-get-functionality-for-particular-id;",
  "rows": [
    {
      "cells": [
        "ID",
        "Status Code"
      ],
      "line": 10,
      "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-get-functionality-for-particular-id;;1"
    },
    {
      "cells": [
        "22",
        "200"
      ],
      "line": 11,
      "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-get-functionality-for-particular-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "I want to check GET functionality for particular ID",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-get-functionality-for-particular-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have Employee Management API up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I give \"22\" with API URI",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the status code should be \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetSteps.i_have_Employee_Management_API_up_and_running()"
});
formatter.result({
  "duration": 5340166949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 8
    }
  ],
  "location": "GetSteps.i_give_with_API_URI(int)"
});
formatter.result({
  "duration": 530219513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "GetSteps.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 3924525,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "I want to check POST functionality",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I have Employee Management API up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I give \"\u003cID\u003e\" \"\u003cName\u003e\" \"\u003cProfession\u003e\" with API URI",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the status code should be \"\u003cStatus Code\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality;",
  "rows": [
    {
      "cells": [
        "ID",
        "Name",
        "",
        "Profession",
        "Status Code"
      ],
      "line": 19,
      "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality;;1"
    },
    {
      "cells": [
        "63",
        "Ravi Kumar",
        "",
        "Data Analyst",
        "200"
      ],
      "line": 20,
      "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality;;2"
    },
    {
      "cells": [
        "56",
        "Manoj Tivari",
        "",
        "Advocate",
        "200"
      ],
      "line": 21,
      "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "I want to check POST functionality",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I have Employee Management API up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I give \"63\" \"Ravi Kumar\" \"Data Analyst\" with API URI",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the status code should be \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetSteps.i_have_Employee_Management_API_up_and_running()"
});
formatter.result({
  "duration": 105287741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "63",
      "offset": 8
    },
    {
      "val": "Ravi Kumar",
      "offset": 13
    },
    {
      "val": "Data Analyst",
      "offset": 26
    }
  ],
  "location": "GetSteps.i_give_with_API_URI(int,String,String)"
});
formatter.result({
  "duration": 1803432395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "GetSteps.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 333630,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I want to check POST functionality",
  "description": "",
  "id": "employee-management-api-testing-using-bdd-framework;i-want-to-check-post-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I have Employee Management API up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I give \"56\" \"Manoj Tivari\" \"Advocate\" with API URI",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the status code should be \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetSteps.i_have_Employee_Management_API_up_and_running()"
});
formatter.result({
  "duration": 56153667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56",
      "offset": 8
    },
    {
      "val": "Manoj Tivari",
      "offset": 13
    },
    {
      "val": "Advocate",
      "offset": 28
    }
  ],
  "location": "GetSteps.i_give_with_API_URI(int,String,String)"
});
formatter.result({
  "duration": 159637236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "GetSteps.the_status_code_should_be(int)"
});
formatter.result({
  "duration": 138585,
  "status": "passed"
});
});