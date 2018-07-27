---
layout: post
title: "Improving Your Scrum Team"
date: 2017-02-07
tags: scrum agile
comments: true
---

I've worked on a few Scrum Teams, and each of them have had different pain points.
I thought I'd write a quick post about some of the improvements made in those teams which ended up having the largest impact.

*Note: This post contains some very colloquial Scrum terms, but with any luck they will be inline with your terms as well.
If you aren't familiar with Scrum, the guide is actually pretty darn tiny, and can be found at [www.scrumguides.org](http://www.scrumguides.org/).*

## Pulling smaller stories into sprints
When we first tried Scrum, we were pulling in large stories without full understanding the consequences.
Usually when a story is large it means there are still some details to be worked out, which increases the risk of discovering problems.
These problems may mean that you aren't able to finish the story in your current sprint, making the teams velocity uneven and less predictable.
Deciding when a story is "too large" can be difficult, but a good start is to put a hard limit on the minimum size a story must be before you bring it into a sprint.
By forcing the team to break down the stories, they are more likely to discover the problems at the planning stage, where it is much easier to mitigate them.

There can be some push back against breaking things down into small stories.
Developers can feel like it slows their productivity when they have work on such small bits at a time.
However, the benefit is that there is a consistent pipeline of code ready to be tested, and because smaller stories cover less functionality, they are easier to complete.

If you are unsure how to break down your large stories, the best way we found was to use [vertical slices](https://en.wikipedia.org/wiki/Vertical_slice), and I've found this works very well.
The concept of vertical slices is to deliver small but complete functions of the system.
Breaking things down like this can feel unnatural at first, "Why don't I just get everything in the database done at once?", but this is a great way of breaking down work because it means that each completed story is a releasible piece of functionality on its own.

For more information, I've found links on [splitting large user stories](http://blog.agilistic.nl/8-useful-strategies-for-splitting-large-user-stories-and-a-cheatsheet/) and [vertical slices](http://agileforall.com/vertical-slices-and-scale/).

## Having all the skills you need within the Scrum Team
There were times it just didn't make sense to have a fulltime front-end developer on the team.
An unfortunate side effect of this was that when a story was ready for front-end development, we were relying on someone outside of the team to get it done.
This put a block of time between developers finishing with a story, and that story being ready for test, putting the testing up to a day behind development.
The delay between development and test also means that on average you are going to have more stories in progress, is a risk if you aren't going to be able to complete them all.

We were able to mitigate this risk by upskilling the developers to learn front-end design as well.
The site we were working did not have a complex design, so it was not a large leap for the existing (though dusty) front-end development skills we had.
Our original front-end designer was still resourced for a small amount pf time each week on our project, but that was now for reviewing our front-end code, and providing advise when we got stuck.
It ended up working very well, 95% of the front-end design could be done by the Scrum Team with no help, and as time went on we became more independent, freeing out original front-end developer up for other projects.

This is not going to be the fix for every team, but I think that where possible, the members of the Scrum Team should be trying to upskill in whatever areas the team is lacking.
For example, a Scrum Team benefits from a developer who can help with testing, because when you are getting to the end of a sprint you are better off closing the open stories, than starting to work on new ones.

## Focusing on the minimum viable product before building more features
One of the huge benefits of Scrum is that you don't need to plan all the details of a product right from the beginning.
It's good to have a vision for where how you want the it to end up, but you will waste a lot of time if you are trying to work out fine details on something you can't even use yet.
We found that we were able to build better products by first building the [minimum viable product (MVP)](https://leanstack.com/minimum-viable-product/) which is "the smallest thing you can build which delivers customer value".
In the journey of creating that, both the team and the client are going to have a better idea on which direction to start building out new features.
It can also be a time to let users try the product and get their feedback on which features will provide them with the most value.
By focusing on the MVP, you minimize the risk that you are building features which aren't needed, or aren't going to be used.

I found a great wee post which explains [what a minimum viable product is, and how it differs from a minimum marketable product](http://scrumandkanban.co.uk/what-is-an-mvp/).
It's well worth checking out because it is a distinction which should be made when you are building a product for a public audience.

## Finally
Here some bits of advice which I couldn't be bothered writing a paragraph on.

- *Keeping the retrospectives going, even when the project is going well.* At times we found ourselves getting complacent. Even when the team is performing well, there will always be room for improvement, so continuing retrospectives is vital.
- *Written developer tests before signing off a story.* This helped a lot in making sure that we weren't getting lazy and sending a story to test without checking it ourselves.
- *Not starting a story if it can't be completed in the current sprint.* This links up with what I've said earlier. If the stories are piling up and it's nearing the end of the sprint. A developer is better off helping to close a story than to start a new one.
- *Letting the team control how much work is pulled into a sprint.* The team will be the best at judging how much work they can get through. By forcing more work into a sprint you are just increasing the likelihood that work is not going to get finished.
- *Bringing in size marker stories to refinement meetings.* The team will get better at sizing stories consistently if they have some existing stories there to compare to.

I hope you enjoyed the post, if you have comments or criticism please let me know in the comment box below.
I'm pretty new to the whole blogging thing so any advice is greatly appreciated.