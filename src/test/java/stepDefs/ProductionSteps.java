package stepDefs;

import io.cucumber.java.en.Then;

public class ProductionSteps {
	@Then("user validates the captcha image")
	public void user_validates_the_captcha_image() {
			System.out.println("user validates captcah file");
	}
}
