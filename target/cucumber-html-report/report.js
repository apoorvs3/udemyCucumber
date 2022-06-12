$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Features/login.feature");
formatter.feature({
  "name": "Login feature to check",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "In order to perform login with various methods",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to admin wensite",
  "keyword": "Given "
});
formatter.step({
  "name": "user validates the Homepage",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "user select the age category",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "age",
        "location"
      ]
    },
    {
      "cells": [
        "below 18",
        "India"
      ]
    },
    {
      "cells": [
        "above 18",
        "USA"
      ]
    }
  ]
});
formatter.step({
  "name": "user should \"\u003cloginType\u003e\" be successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ]
    },
    {
      "cells": [
        "valid",
        "valid",
        ""
      ]
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "not"
      ]
    }
  ]
});
formatter.scenario({
  "name": "In order to perform login with various methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to admin wensite",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_admin_wensite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"valid\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"valid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "age",
        "location"
      ]
    },
    {
      "cells": [
        "below 18",
        "India"
      ]
    },
    {
      "cells": [
        "above 18",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_select_the_age_category(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should \"\" be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to perform login with various methods",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to admin wensite",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_admin_wensite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"invalid\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \"invalid\" password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "age",
        "location"
      ]
    },
    {
      "cells": [
        "below 18",
        "India"
      ]
    },
    {
      "cells": [
        "above 18",
        "USA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_select_the_age_category(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should \"not\" be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});