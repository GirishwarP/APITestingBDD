package com.StepDefinitions;

import static io.restassured.RestAssured.given;

import com.pojo.Employee;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class GetSteps {

	static final String apiUrl = "http://localhost:8080/EmployeeManagement/rest/EmployeeService/employees/";
	static int statusCode;
	static Employee payload;
	
	@Given("^I have Employee Management API up and running$")
	public void i_have_Employee_Management_API_up_and_running() throws Throwable {
	    given().when().get(apiUrl);
	}

	@When("^I give \"([^\"]*)\" with API URI$")
	public void i_give_with_API_URI(int id) throws Throwable {
		statusCode = given().contentType(ContentType.JSON).body(id).when().get(apiUrl).getStatusCode();
	}
	
	@When("^I give \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" with API URI$")
	public void i_give_with_API_URI(int id, String name, String profession) throws Throwable {
			payload = new Employee.Builder().setId(id).setName(name).setProfession(profession).build();
			statusCode = given().contentType(ContentType.JSON).body(payload).when().get(apiUrl).getStatusCode();
	}

	@Then("^the status code should be \"([^\"]*)\"$")
	public void the_status_code_should_be(int exStatusCode) throws Throwable {
			Assert.assertEquals(exStatusCode, statusCode);
	}
}
