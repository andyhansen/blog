---
layout: post
title: "My Transition from .NET to Ruby"
description: "My journey from noob to rube"
date: 2018-07-11
tags: ruby .net
published: false
comments: true
---

Late last year, I made the switch from .NET to Ruby as my server-side language.
It's been an interesting ride so far, and now feels like a good time to quickly walk through some of the landmarks on my journey so far.

## From IDE to text editors

If you are developing in .NET, you are almost certainly going to be using Visual Studio.
Out of the box you are getting great code generation, code completion, error checking, and unit test runners.
I also found that very little of my daily development tasks would require me to use the command-line.

With Ruby, text editors rule the world. I've found that most people seem to be using either [Vim](https://www.vim.org/), [VSCode](https://code.visualstudio.com/), or [Atom](https://atom.io/).
Use of the command-line is a given, with even [basic Ruby tutorials](https://www.ruby-lang.org/en/documentation/quickstart/) involving the command line in some way.
A text editor won't have all the bells and whistles out the gate, but there a rich ecosystem of extensions to tweak them, and bring back some of those features you get out of the box with Visual Studio.
It has been a slow but rewarding process getting my setup perfect for me.
The [IKEA effect](https://en.wikipedia.org/wiki/IKEA_effect) in full force!

## Getting to know the Ruby language
After a few months I started to feel quite comfortable in Ruby, but the jump from a static, compiled language, to a dynamic, scripting language takes some getting used to.
The compiler safety net is no longer going to be checking your types or variables are correct, and refactoring doesn't feel as safe anymore.
As a result I've found that I've need to be a bit more thorough my unit tests.

I'd recommend picking up some [static code analysis tools](https://en.wikipedia.org/wiki/Static_program_analysis) like [Rubocop](https://github.com/rubocop-hq/rubocop) (for Ruby) and [ESLint](https://github.com/eslint/eslint) (for JS).
These will pick up errors like unused variables, and help you catch mistakes as early as possible.

Debugging has taken some getting used to, but I've finally got a pretty good [debugging setup with VSCode](https://code.visualstudio.com/docs/editor/debugging).
There are also some great tools like [Pry](http://pryrepl.org/), which gives you a developer console wherever you put `binding.pry` in your code.

## The Ruby community is fantastic
The Ruby community has been the massive unexpected draw card from me.
There is a New Zealand wide Ruby Slack channel, which has really bolstered the feeling for community for me.
The vibe overall is just a bit more natural, which may be because there is no parent company like Microsoft to organize it a specific way.
It also feels like there is a much more active hunger for learning, though that could be the increased time I'm spending in channels related to programming.

## Time away from the Microsoft ecosystem
Microsoft does a great job at gluing all their offerings together, which often makes it the first thing you reach for to solve a problem.
If you needed a database, you'll probably be using [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2016), for Bots, it's [Bot Framework](https://dev.botframework.com/), [Azure](https://azure.microsoft.com/en-us/) is the easiest way to set up web hosting.
These are all great solutions, but I was starting to feel a bit boxed in by them.
My career at this point had ended up being entirely Microsoft.
I could see the thriving world of open source through my window, and it was giving me major [FOMO](https://en.wikipedia.org/wiki/Fear_of_missing_out).

For me, switching to Ruby was a chance to see just how green this other grass was.
Both [Rails](https://github.com/rails/rails), and [Ruby](https://github.com/ruby/ruby) are open source, and leverage open source technologies such as [PostgreSQL](https://github.com/postgres/postgres).
I expect their to be some integration issues as I start trying newer technology, but for now the beaten path has been kind to a newcomer like me.
If you can stand to live a tiny bit behind the hype curve, a lot of the problems you will run into are going to be solved. (Thanks StackOverflow)

## Will I be back?
During my stay in Ruby land, Microsoft has continued to improve their commitment to open source.
[.NET Core](https://github.com/dotnet/core) is open source, and can even be [setup on any platform](https://www.microsoft.com/net/learn/get-started/linux/).
I still really love .NET, and plan to pick it up for a side project at some stage in the future, but I'll be trying my best to keep the stack as open source as possible.

Until then, I'm absolutely loving Ruby, and the open source ecosystem that surrounds it.
Even in this short time I've learnt so much, and it's amazing to have such a new world of technology to explore.

It's not all been easy, but I would definitely recommend giving it a go.
I feel like I've become a more well rounded developer, and trying something so different has really motivated me to keep learning.
If I ever do end up working with .NET professionally again, I'm confident I'll be bringing a host of knowledge it would have otherwise missed out on.

10/10, would recommend!