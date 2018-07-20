---
layout: post
title: "My Transition from C# to Ruby"
description: "from noob to rube"
date: 2018-07-21
tags: ruby .net
comments: true
---

Late last year, I made the switch from C# to Ruby as my server-side language.
I've put together some details of my experience for anyone thinking of doing the same.

## From the IDE to the text editors

The C#/.NET development environment comes in a pretty standard package.
You'll probably be using Windows, and you'll probably be using Visual Studio.
Out of the box this gives you most of the tools you need.
Code generation, code completion, error checking, and unit test runners.

Setups for Ruby/Rails are a lot more varied, most people seem to be using either [Vim](https://www.vim.org/), [VSCode](https://code.visualstudio.com/), or [Atom](https://atom.io/) as a base.
Unlike Visual Studio, your editor text editor won't have all the bells and whistles out the gate.
However, they each have a rich ecosystem of extensions to tweak them to your specific needs.
I've found the process of building up my development environment has been a slow but rewarding process, with a bit of the [IKEA effect](https://en.wikipedia.org/wiki/IKEA_effect) sprinkled in.

The command-line also becomes core to your daily workflow, and you'll find it used in even [basic Ruby tutorials](https://www.ruby-lang.org/en/documentation/quickstart).
Heavy use of the command-line can take a bit of getting used to, but will prove to be both a powerful and satisfying development tool.

## Learning Ruby

A few months had passed before I really started feeling comfortable in Ruby.
It sat firmly at the opposite end of my comfort zone, as a dynamic scripting language.
My statically typed, compiled, safety net provided by C# was gone.

Now that I've got more of a handle on the language, I'm starting to feel the benefit of it's flexibility.
It's a lot easier to test an idea, and the code is putty in your hands as you try different variations of the same thought.
Compile time is gone, which is especially handy on larger projects where even the smallest change could involve an [intolerably long compile time](https://xkcd.com/303/).
A few compile-like checks can be gained back with [static code analysis tools](https://en.wikipedia.org/wiki/Static_program_analysis) like [Rubocop](https://github.com/rubocop-hq/rubocop).
These will pick up low hanging errors like unused variables, and help you catch mistakes as early as possible.

Ruby also comes with some interesting language tools, such as [Ruby symbols](https://ruby-doc.org/core-2.2.0/Symbol.html), and [shorthand if statements](https://www.natashatherobot.com/ruby-shorthands-if-then-else/).
It doesn't look like much, but the combination of many little tools like that can make code very pleasant to write.

Debugging has taken some getting used to, but I've finally got a pretty good [debugging setup with VSCode](https://code.visualstudio.com/docs/editor/debugging).
There are also some great tools like [Pry](http://pryrepl.org/), which gives you a developer console wherever you put `binding.pry` in your code.

## The Ruby community is fantastic

I believe the major strength of Ruby is in it's community.
Events like [RailsBridge](http://www.railsbridge.org/) and [Railsn00bs](https://www.meetup.com/WellingtonRailsn00bs/) provide a supportive environment to learn how to program.
The New Zealand Ruby Slack channel as also proved to be an extremely valuable resource.
Feeling connected to such a knowledgable community has inspired me to become a better programmer than I've ever been before.
This supportive combination of elements makes it an excellent place to start as a new programmer.

## Time away from the Microsoft ecosystem

Microsoft does a great job at gluing all their offerings together, but this mean that it's all you end up using.
Your database is probably [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2016), hosted on [Azure](https://azure.microsoft.com/en-us/).
Thinking of trying bots? Well the Microsoft's [Bot Framework](https://dev.botframework.com/) is right there.
Don't get me wrong, these are all great products, but I was starting to feel like Microsoft is all I knew.
I could see the thriving world of open source through my window, and it was giving me major [FOMO](https://en.wikipedia.org/wiki/Fear_of_missing_out).

Switching to Ruby was a chance to see just how green this other grass was.
Both [Rails](https://github.com/rails/rails), and [Ruby](https://github.com/ruby/ruby) are open source, and leverage open source technologies such as [PostgreSQL](https://github.com/postgres/postgres).
Occasionally I'll bump into an integration issue, but for now the beaten path has been kind to a newcomer like me.

## Will I be back?

During my stay in Ruby land, Microsoft has continued to improve their commitment to open source.
Their new version of .NET, [.NET Core](https://github.com/dotnet/core) is open source, and can even be [setup on any platform](https://www.microsoft.com/net/learn/get-started/linux/).
I still really love C#/.NET, and plan to pick it up for a side project at some stage in the future, but I'll be trying my best to keep the stack as open source as possible.

Until then, I'm absolutely loving Ruby, and the open source ecosystem that surrounds it.
Even in this short time I've learnt so much, and it's amazing to have such a new world of technology to explore.
I can absolutely recommend jumping over the fence to try it out, even if it's just for a while.