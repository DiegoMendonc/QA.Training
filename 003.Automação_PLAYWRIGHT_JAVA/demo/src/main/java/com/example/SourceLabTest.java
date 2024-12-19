package com.example;

import java.lang.annotation.Target;
import java.util.regex.Pattern;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

public class SourceLabTest {
    private WebDriver driver;
    
    @Test
    public void LoginTest {
        Playwright playwright = Playwright.create();
        Browser browser = playwright.chromium().launch();
        Page page = browser.newPage();

        //Navegar pela URL
        page.navigate("https://www.saucedemo.com/v1/");
        //Expect do carregamento da URL
        page.locator("text=Swag Labs").isVisible();
        System.out.println(page.title());

    }
}