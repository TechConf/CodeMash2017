[Presentation](https://speakerdeck.com/mpirnat/shiny-lets-be-bad-guys-exploiting-and-mitigating-the-top-10-web-app-vulnerabilities-codemash-2017-edition)
[Repository used](https://github.com/mpirnat/lets-be-bad-guys)

---
##### Shiny, Let’s Be Bad Guys: Exploiting and Mitigating the Top 10 Web App Vulnerabilities
* Date: 1/11/17 1:00 pm
* Speakers: Mike Pirnat
* Room: Aloeswood, Leopardwood
* Tags: Other, Security
* Category: Pre-Compiler
---
The Internet is a dangerous place, filled with evildoers out to attack your code for fun or profit, so it’s not enough to just ship your awesome new web app–you have to take the security of your application, your users, and your data seriously. You’ll get into the mindset of the bad guys as we discuss, exploit, and mitigate the most common web app security flaws in a controlled environment. We’ll discuss each kind of the most prevalent security flaws at the theoretical level; then using a specially-crafted, deliberately vulnerable app, individuals or pairs will carry out exploits against these flaws, and we’ll discuss strategies for mitigating each type of attack in several popular Python frameworks.

We’ll be using the [OWASP Top 10](https://www.owasp.org/index.php/Top_10_2013-Top_10) as our topic roadmap, addressing issues such as:
* Injection Attacks
* Broken Authentication & Session Management
* Cross-Site Scripting (XSS)
* Insecure Direct Object References
* Security Misconfiguration
* Sensitive Data Exposure
* Missing Function-Level Access Control
* Cross-Site Request Forgery (CSRF)
* Using Components with Known Vulnerabilities
* Unvalidated Redirects and Forwards

You’ll want to set your brain to “devious” mode; you’ll also need a laptop with Python 2.7 or 3.3 (or a buddy you can pair with). Having pip and virtualenv will be useful too, as will having Git installed to pull down the code we’ll be working with. Attendees **do not need prior security experience**; this tutorial is aimed at **intermediate web developers** who are interested in gaining hands-on experience with **simple forms of the most common attacks**. Attendees should have some experience with **Python, Javascript, and SQL**, and may benefit from at least a passing familiarity with Django (eg, previously attending a Django tutorial or working through the [online tutorial](https://docs.djangoproject.com/en/1.10/intro/tutorial01/)).
