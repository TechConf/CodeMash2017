[Slides from PittsburgTechFest 2016](https://github.com/PghTechFest/PghTechFest2016/blob/master/building%20serverless%20software%20with%20AWS%20lambda%20-%20Jon%20Knapp.pdf)
[Video from Erie Day of Code 2016](https://www.youtube.com/watch?v=i5hhcZk31t8)
[What Does Lambda Support Reference Site](http://whatdoeslambdasupport.com)
---
##### Building “serverless” software with AWS Lambda
* Date: 1/12/17 1:00 pm
* Speakers: Jonathan Knapp
* Room: Indigo Bay
* Tags: Other, JavaScript
* Category: General Session
---
I was asked to build a fuzzytext search interface for information stored in the SEC’s massive Edgar database which holds all of the electronic documents filed with the SEC. By leveraging managed ElasticSearch, S3 for document storage, and the asynchronous job processing power of AWS Lambda I was able to build a solution that required absolutely no ongoing server maintenance for my client. In this talk I’ll explain how I was able to: – parse gigabytes of info without IP activity restrictions – provide an easy way to scale or disable the application – continuously monitor parsing activity and application health You will learn about the different services I utilized with their strengths and weaknesses as well as alternative services like Iron.io which allows you to write code in many different languages. I’ll also talk about different ways async processing can be applied to other situations such as managing contact forms for static websites as FormKeep does.
