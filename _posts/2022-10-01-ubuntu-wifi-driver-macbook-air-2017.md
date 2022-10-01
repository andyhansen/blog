---
layout: post
title: Installing Ubuntu wireless drivers on an older Macbook Air
date: 2022-10-01
tags: ubuntu wifi-driver
---

Whenever I reinstall Ubuntu on my laptop, I spend 15 minutes digging around the internet trying to remember how to install the wireless driver.
I've written this down so that I don't have to look so hard anymore.

## Steps

1. Check which device you have

```sh
$ lspci -nn | grep 0280
```

In my case I had `Broadcom Inc. and subsidiaries BCM4360 802.11ac Wireless Network Adapter [14e4:43a0] (rev 03)`.
I was then able to search online for the specific wireless device, which I found returned better results than searching for the type of laptop.

2. Install the driver for your device

```sh
sudo apt install bcmwl-kernel-source
```

In my case, running this command was enough to get my WiFi working.
I just had to restart my computer after the installation has completed.

## Conclusion

This guide probably isn't useful unless you are exactly me trying to do this about twice a year, but that's okay.
Thanks for stopping by.