---
layout: post
title: "Web.config for a Static Site"
date: 2017-02-12
tags: wyam iis
comments: true
---

When I originally set up this blog, I was using a very basic web.config.
I quickly found this wasn't complete enough for my needs, so gave it a bit of an upgrade.

In this post I'll go through my the sections of my web.config and explain why they are necessary.
At the bottom of the post you will find the config in full, so you can copy it for your own static site.
I can only confirm that this config works with my Wyam site on Azure, but it should work with any other IIS hosted static site.

## Web.config sections
Here I'll go through the sections of my web.config, what they do, and why I'm using them.

### Error handling
I have a couple of error redirects so that the user isn't given a blank page when something goes wrong.
These pages cover 404 (page not found), and 500 (server) errors.
If either of these errors occur, the user will be redirected to the specified error pages I've created so that they know what has gone wrong.
In my case, the error pages are named 404.html and 500.html, but you can name yours whatever you like by changing the path.
```
<httpErrors errorMode="Custom">
    <remove statusCode="500" subStatusCode="-1" />
    <remove statusCode="404" subStatusCode="-1" />
    <error statusCode="404" prefixLanguageFilePath="" path="/404.html" responseMode="ExecuteURL" />
    <error statusCode="500" prefixLanguageFilePath="" path="/500.html" responseMode="ExecuteURL" />
    <error statusCode="500" subStatusCode="100" path="/500.html" responseMode="ExecuteURL" />
</httpErrors>
```

### Routing rules
I've got a rule set up to remove the .html from the end of the URL, making it look cleaner.
```
<rule name="RewriteHtml">
    <match url="^(.*)$" />
    <conditions logicalGrouping="MatchAll">
        <add input="{REMOTE_PORT}" pattern=".*" />
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
    </conditions>
    <action type="Rewrite" url="{R:1}.html" />
</rule>
```

This rule will remove the "www." from the URLs.
You won't break anything if you don't include this rule, so you can skip it if you prefer the default behaviour. 
I'm removing them on my site because I like to keep the URLs as short as possible.
```
<rule name="Remove WWW" stopProcessing="true">
    <match url="(.*)" ignoreCase="true" />
    <conditions logicalGrouping="MatchAll">
        <add input="{HTTP_HOST}" pattern="^www\.(.+)$" />
    </conditions>
    <action type="Redirect" url="http://{C:1}/{R:0}" appendQueryString="true" redirectType="Permanent" />
</rule>
```

If you DON'T have SSL set up, then need to make sure you don't include this rule.
Though this rule is a must if you are using SSL, because it will ensure that the user is always viewing the secure version of your site.

SSL is not as necessary for static sites, because no user data is being transferred between your servers and your users. 
However, it is best practice to have it set up, and it will help with your [Search Engine Optimization](https://en.wikipedia.org/wiki/Search_engine_optimization).
If you are interested in setting up SSL, you can get a certificate for free via [Let's Encrypt](https://letsencrypt.org/).
```
<rule name="Redirect to HTTPS" stopProcessing="true">
    <match url="(.*)" />
    <conditions>
        <add input="{REMOTE_PORT}" pattern=".*" />
        <add input="{HTTPS}" pattern="^OFF$" />
    </conditions>
    <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
</rule>
```

### Static content file types
Static content was the most important section I was missing in my original web.config.
It tells ISS what the content type is for file extensions it doesn't recognize.
Before it was set up, the browser couldn't open the RSS feed for my site, and some of my font files weren't loading.
IIS didn't recognize the file extensions, so served up the files with the incorrect file type of "application".
So for each extension IIS doesn't know, we tell it what the file type is.

As you can see below, each extension is defined using the same pattern.
We tell IIS to forget everything it knows about a particular file extension, and then we tell it what the file type should be.
I've got a bit of future proofing in my web.config, so you may want to only include extensions you are using now.
I didn't see the harm of adding more now, I don't want to edit my web.config each time I use a new file type on my blog.
```
<staticContent>
    <remove fileExtension=".mp4" />
    <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
    <remove fileExtension=".m4v" />
    <mimeMap fileExtension=".m4v" mimeType="video/m4v" />
    <remove fileExtension=".ogg" />
    <mimeMap fileExtension=".ogg" mimeType="video/ogg" />
    <remove fileExtension=".ogv" />
    <mimeMap fileExtension=".ogv" mimeType="video/ogg" />
    <remove fileExtension=".webm" />
    <mimeMap fileExtension=".webm" mimeType="video/webm" />
    <remove fileExtension=".oga" />
    <mimeMap fileExtension=".oga" mimeType="audio/ogg" />
    <remove fileExtension=".spx" />
    <mimeMap fileExtension=".spx" mimeType="audio/ogg" />
    <remove fileExtension=".svg" />
    <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
    <remove fileExtension=".svgz" />
    <mimeMap fileExtension=".svgz" mimeType="image/svg+xml" />

    <!-- fonts -->
    <remove fileExtension=".otf" />
    <mimeMap fileExtension=".otf" mimeType="font/otf" />
    <remove fileExtension=".eot" />
    <mimeMap fileExtension=".eot" mimeType="application/vnd.ms-fontobject" />
    <remove fileExtension=".ttf" />
    <mimeMap fileExtension=".ttf" mimeType="application/octet-stream" />
    <remove fileExtension=".woff" />
    <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
    <remove fileExtension=".woff2" />
    <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />

    <!-- feeds -->
    <remove fileExtension=".rss" />
    <mimeMap fileExtension=".rss" mimeType="application/rss+xml" />
    <remove fileExtension=".atom" />
    <mimeMap fileExtension=".atom" mimeType="application/atom+xml" />
</staticContent>
```
## Full web.config
So there we have it. Hopefully my explanations all made sense, and if not, leave a comment and let me know how I can make the post better.
Below is the full contents of my web.config.

```
<?xml version="1.0"?>
<configuration>
    <system.webServer>
        <httpErrors errorMode="Custom">
            <remove statusCode="500" subStatusCode="-1" />
            <remove statusCode="404" subStatusCode="-1" />
            <error statusCode="404" prefixLanguageFilePath="" path="/404.html" responseMode="ExecuteURL" />
            <error statusCode="500" prefixLanguageFilePath="" path="/500.html" responseMode="ExecuteURL" />
            <error statusCode="500" subStatusCode="100" path="/500.html" responseMode="ExecuteURL" />
        </httpErrors>
        <rewrite>
            <rules>
                <rule name="Redirect to HTTPS" stopProcessing="true">
                    <match url="(.*)" />
                    <conditions>
                        <add input="{REMOTE_PORT}" pattern=".*" />
                        <add input="{HTTPS}" pattern="^OFF$" />
                    </conditions>
                    <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
                </rule>
                <rule name="RewriteHtml">
                    <match url="^(.*)$" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REMOTE_PORT}" pattern=".*" />
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="{R:1}.html" />
                </rule>
                <rule name="Remove WWW" stopProcessing="true">
                    <match url="(.*)" ignoreCase="true" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{HTTP_HOST}" pattern="^www\.(.+)$" />
                    </conditions>
                    <action type="Redirect" url="http://{C:1}/{R:0}" appendQueryString="true" redirectType="Permanent" />
                </rule>
            </rules>
        </rewrite>
        <staticContent>
            <remove fileExtension=".mp4" />
            <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
            <remove fileExtension=".m4v" />
            <mimeMap fileExtension=".m4v" mimeType="video/m4v" />
            <remove fileExtension=".ogg" />
            <mimeMap fileExtension=".ogg" mimeType="video/ogg" />
            <remove fileExtension=".ogv" />
            <mimeMap fileExtension=".ogv" mimeType="video/ogg" />
            <remove fileExtension=".webm" />
            <mimeMap fileExtension=".webm" mimeType="video/webm" />
            <remove fileExtension=".oga" />
            <mimeMap fileExtension=".oga" mimeType="audio/ogg" />
            <remove fileExtension=".spx" />
            <mimeMap fileExtension=".spx" mimeType="audio/ogg" />
            <remove fileExtension=".svg" />
            <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
            <remove fileExtension=".svgz" />
            <mimeMap fileExtension=".svgz" mimeType="image/svg+xml" />

            <!-- fonts -->
            <remove fileExtension=".otf" />
            <mimeMap fileExtension=".otf" mimeType="font/otf" />
            <remove fileExtension=".eot" />
            <mimeMap fileExtension=".eot" mimeType="application/vnd.ms-fontobject" />
            <remove fileExtension=".ttf" />
            <mimeMap fileExtension=".ttf" mimeType="application/octet-stream" />
            <remove fileExtension=".woff" />
            <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
            <remove fileExtension=".woff2" />
            <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />

            <!-- feeds -->
            <remove fileExtension=".rss" />
            <mimeMap fileExtension=".rss" mimeType="application/rss+xml" />
            <remove fileExtension=".atom" />
            <mimeMap fileExtension=".atom" mimeType="application/atom+xml" />
        </staticContent>
    </system.webServer>
</configuration>
```