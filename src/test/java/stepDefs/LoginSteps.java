package stepDefs;

import java.util.List;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


//user control+shift+o to get all imports at once

public class LoginSteps {
	
	@Before
	public void setup() {
		System.out.println("Launch the browser");
		
	}
	@After
	public void TearDown() {
		System.out.println("quite the browser");
	}
	
	@Before("@prodnew")
	public void setupProd() {
		System.out.println("Launch the browser for prod");
		
	}
	@After("@prodnew")
	public void TearDownProd() {
		System.out.println("quite the browser for prod");
	}
	
	@Given("user navigates to admin wensite")
	public void user_navigates_to_admin_wensite() {
		System.out.println("given user navigates ");
	}

	@When("user validates the Homepage")
	public void user_validates_the_homepage() {
		System.out.println("user is on home");
	}


	@Then("user should be successfully logged in")
	public void user_should_be_successfully_logged_in() {

	}

	@Then("user select the age category")
	public void user_select_the_age_category(DataTable table) {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);
		
		System.out.println("And user select the age category: " + data.get(0).get("age")+ "---selected locations is : "+ data.get(0).get("location"));
	}


	@Then("user enters the {string} username")
	public void user_enters_the_username(String validity) {
	   
	}
	@Then("user enters the {string} password")
	public void user_enters_the_password(String validity) {

	}


	@Then("user should {string} be successfully logged in")
	public void user_should_be_successfully_logged_in(String string) {
	}





}
