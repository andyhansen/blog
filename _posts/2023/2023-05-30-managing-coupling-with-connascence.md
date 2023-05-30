---
layout: post
title: Managing Coupling with Connascence
description: 
date: 2023-05-30
tags: programming code-quality
link: 
comments: true
---

Connascence is a software metric for measuring the impact of [coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) in your code base.
The rules and language it provides allow you to make more informed decisions about how to structure or refactor your code.
Two components are considered connascent if a change to one would require a change to the other.
The stronger the connascence between two components, the more change is required.

## How is it measured?

Connascence is measured over three axes, each having an impact on the overall severity.
		
* **Strength.** Stronger connascence is harder to identify and refactor. Strength is determined by the rule.
* **Degree.** How many entities are involved. Is it one, or is it thousands?
* **Locality.** How close the entities are together. Stronger connascence is less of a problem if entities are close together.

Improving your code on any of these axes will make it easier to work with in the future.
In some cases I've included a little bit of advice on how I'd approach it.

Now that we've established what it is, and how it's measured, let's have a look at the rules.

## Static vs Dynamic Connascences

There are two types of connascence. Static and dynamic.

Static connascence can be found by visually studying the code and with static code analysis. 

Dynamic connascence can only be discovered by running your code. These are considered stronger because they are harder to find and fix.

### Connascence of Name

![Connascence of Name](/assets/images/understanding-connascence/name.png)

When multiple elements must agree to the name of an entity, e.g. class name, method name. When a method name changes, the callers of that method need to change their reference to the match new name.

It’s almost impossible to avoid connascence of name, but it’s also very easy to refactor. Many languages have tools to automate the process of renaming methods, variables, and classes.

### Connascence of Type

![Connascence of Type](/assets/images/understanding-connascence/type.png)

When multiple components must agree on the type of an entity. A statically typed language will catch these with the compiler, but they can be harder to catch with a dynamically typed language. If your test data is not set up the same as the data used when your code is running, you may not catch these issues right away.

#### Mitigating

You can reduce the impact of connascence of type in dynamically typed languages like Ruby by using methods like `respond_to?`.
Though it's not as strict as type checking, it makes it clear to the caller what methods the given variable is expected to have.

Using structs instead of hashes is another way that you can add a bit of structure to your code, and make it easier for other developers to understand what they can expect when they are working with a variable.

### Connascence of Meaning

![Connascence of Meaning](/assets/images/understanding-connascence/meaning.png)

When multiple entities must agree on the meaning of particular values for them to function correctly, e.g. if you have decided that a test credit card has the format `4111 1111 1111 1111`. If important values like these aren’t stored somewhere that they can be referenced, there is a risk that logic which depends on them gets out of sync.

Connascence of meaning is often seen as “magic strings”. Magic strings are important values which aren’t stored in variables. Without the context of a variable name it can make it difficult to understand the purpose of the value, and may require the developer to read the surrounding code to understand what the value is for, and why it’s important.

#### Mitigating

Any reference value should be stored in a constant, even if it’s only used once. A named constant is useful because it provides a central source of truth, and allows you to use the name to explain its purpose.

### Connascence of Position

![Connascence of Position](/assets/images/understanding-connascence/position.png)

When multiple entities have to agree on the order of values. For example if you have a method which takes positional parameters. This can be more of a problem for dynamically typed languages because the compiler isn’t making sure that the types are correct, but it is equally possible in statically typed languages when all of the parameters are the same type.

This applies to both data structures and function arguments.

#### Mitigating

Use keyword parameters when possible or practical. They are more verbose, but adjusting from positional to keyword parameters changes it from connascence of position to connascence of name, which is weaker (better).

### Connascence of Algorithm

When two entities must manipulate data in the same way. Used when communicating with encryption. Both endpoints need to use the same methods to encrypt and decrypt the information if they are going to be able to communicate.

Connascence of algorithm also includes the way that data is validated. If your data is validated differently by different entities, you will end up with inconsistencies and it may break your application in unexpected ways.

## Dynamic Connascenes

### Connascence of Execution

![Connascence of Execution](/assets/images/understanding-connascence/execution.png)

When the order of execution between multiple components is important. It also includes state machines which only allow certain operations for certain states. When these issues are local (e.g. within the same file), they are fairly easy to identify and fix. However, when they spread over multiple files it can be much harder to trackdown the cause.

#### Mitigating

Keep logic which depends on the order of operation as local as possible.
Encapsulating logic within class allows you to handle out of order calls either by adding checks, or by structuring methods to prevent them.
For example, the email class could raise a runtime error if the subject wasn't set.
Adding checks like this won't prevent these errors from happening, but they will make them loud and easy to identify.

### Connascence of Timing

![Connascence of Timing](/assets/images/understanding-connascence/timing.png)

When the timing of execution matters between multiple components is important. You will commonly hear these referred to as [race conditions](https://en.wikipedia.org/wiki/Race_condition).

#### Mitigating

Locks can be used to ensure that a resource is only being worked on by one entity at a time, but won't ensure that they are done in a particular order.
In a distributed system you can reduce the impact of timing related issues by allowing queues to retry when information is missing.
This will allow them to work once that information has become available.
[Designing your system to be self-healing](https://blog.developer.adobe.com/the-road-towards-self-healing-systems-19ea767bd1b5) will allow it to recover when information is missing, either by requesting it, or retrying until the information is available.

### Connascence of Value

![Connascence of Value](/assets/images/understanding-connascence/value.png)

When multiple values must change together.

This is a major problem when you want to create a transaction over distributed systems. In these scenarios you want to update all services or none, however separate databases mean that rolling back an operation needs to be done manually in code.

#### Mitigating

Transactions over multiple services are a pain.
It's best to avoid them if possible.

If there is no way around it, there are three techniques I'd recommend.
They aren't mutually exclusive, but are in order of preference.

Queues can be used if you don't mind eventual consistency.
Ensure that you have a [dead letter queue](https://en.wikipedia.org/wiki/Dead_letter_queue) to catch the messages that fail to process successfully.

Make your endpoints [idempotent](https://en.wikipedia.org/wiki/Idempotence).
There are many "good enough" ways of making code idempotent.
For example, using `find_or_create` instead of `create`.
It's not perfect, but it allows an API to be called multiple times without needing much custom logic.

When interacting with remote services, perform the actions that are most likely to fail first.
This is pretty flimsy, but it can be better than nothing.

### Connascence of Identity

When multiple components must reference the same instance of an entity. Most commonly this occurs when multiple entities are updating a shared data structure.

#### Mitigating

[Singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern) is an example of how to avoid connascence of identity.
A singleton ensures that there will only be one instance of a certain entity.
That allows other entities to use it without having to guarantee that there are no other instances of it.
However, singletons can create their own problems and should generally be avoided when possible.

## Resources

Unsurprisingly [connascence.io](https://connascence.io) is a great resource on the topic of connascence. In particular, [their list of resources](https://connascence.io/pages/about.html) is vast.

I'll also list a few other resources I found useful as I was writing this blog post.

* [https://programhappy.net/2020/09/19/fixing-dynamic-connascence/](https://programhappy.net/2020/09/19/fixing-dynamic-connascence/)
* [https://thoughtbot.com/blog/connascence-as-a-vocabulary-to-discuss-coupling](https://thoughtbot.com/blog/connascence-as-a-vocabulary-to-discuss-coupling)
* [https://khalilstemmler.com/wiki/coupling-cohesion-connascence/](https://khalilstemmler.com/wiki/coupling-cohesion-connascence/)

## Goodbye

Thanks for coming.
I feel like this is a post I'll come back and edit, so don't get too attached.
If you have any feedback you are welcome to [send it to the email found on my about page](/about).
