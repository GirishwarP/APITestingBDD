package com.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features",
				 glue= {"com.StepDefinitions"},
				 //dryRun = true,
				 plugin= {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json","junit:target/cucumber-xml-report.xml"})
public class Runner {

}
