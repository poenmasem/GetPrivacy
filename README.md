# Setup Windows Privacy Focused
<!--Related:
* [Windows Best Privacy Practices](https://www.reddit.com/r/privacytoolsIO/comments/fwgvsb/windows_10_best_privacy_practices/?utm_source=amp&utm_medium=&utm_content=post_body)-->
A Complete Guide to setup Windows by focusing on Privacy and Security.

## 1. Download Windows ISO

* Windows 7  
[Digital river mirror](https://digitalrivermirror.com/)


* Windows 8  
[Heidoc.net](https://heidoc.net/joomla/technology-science/microsoft/67-microsoft-windows-and-office-iso-download-tool)


* Windows 10  
  - [TechBench](https://tb.rg-adguard.net/public.php)  
  - [Heidoc.net](https://heidoc.net/joomla/technology-science/microsoft/67-microsoft-windows-and-office-iso-download-tool)

Related:
[Windows 10 LTSC](https://azimstech.github.io/2018-10-05-windows-10-enterprise-ltsc-2019/)

## 2. Removing Unnecessary Components
* Windows 7  
[Integrate7 Script](https://www.wincert.net/forum/topic/14001-integrate7-script-%E2%80%93-automatically-download-and-slipstream-all-updates-up-to-052021/)

* Windows 8  
[W8.1-Tweak-Pack](https://www.ntlite.com/community/index.php?threads/clangers-download-page.1272/)

* Windows 10  
  * [AME](https://ameliorated.info/)

Realted: (AME)
* [Getting Started](https://wiki.ameliorated.info/doku.php?id=getting_started)
* [The Case Against Anti-Virus Software](https://wiki.ameliorated.info/doku.php?id=antivirus)
* [How To Install Updates](https://wiki.ameliorated.info/doku.php?id=system_updates)

## 3. Activation
* Windows 7  
[Daz Loader](https://forums.mydigitallife.net/threads/windows-loader-download.58464/)  (Original)

  * For GPT Partitions
    - [Rearm Wizard](https://forums.mydigitallife.net/threads/rearm-wizard-the-premier-rearm-solution-for-windows-7-and-office-2013.43861/)

* Windows 8  
[KMS Script by abbodi1406](https://github.com/abbodi1406/KMS_VL_ALL_AIO)

* Windows 10  
[MAS](https://github.com/massgravel/Microsoft-Activation-Scripts)

## 4. Installing Drivers
[Snappy Driver Installer](https://www.snappy-driver-installer.org/)  
Snappy Driver Installer Origin(SDIO). This method is the easiest method of installing drivers.
But, you should search for Touchpad and Graphics Drivers in manufacturer website to prevent errors.

* [NVCleanstall](https://www.techpowerup.com/download/techpowerup-nvcleanstall/)  
NVCleanstall lets you customize the NVIDIA GeForce Driver package by removing components that you don't need (or want). This not only keeps things tidy, but also lowers disk usage and memory footprint

Related:  
[AME - Getting Started](https://wiki.ameliorated.info/doku.php?id=getting_started)

## 5. Office Suite
* [OnlyOffice](https://www.onlyoffice.com/)  
OnlyOffice, stylized as ONLYOFFICE, is a free software office suite developed by Ascensio System SIA, a company headquartered in Riga, Latvia.

* [LibeOffice](https://www.libreoffice.org/)  
LibreOffice is a free and open-source office productivity software suite, a project of The Document Foundation. It was forked in 2010 from OpenOffice.org, which was an open-sourced version of the earlier StarOffice

## 6. Apps Setup
### ● &nbsp; Browser  
* [LibreWolf](https://librewolf-community.gitlab.io/)  
* [Ungoogled Chomium](https://ungoogled-software.github.io/ungoogled-chromium-binaries/)  
* [Epic Browser](https://www.epicbrowser.com/)  
* [Tor Browser](https://www.torproject.org/)

Related:

### ● &nbsp; Browser Add-ons
* [uBlock Origin](https://github.com/gorhill/uBlock) - Block Ads and Trackers
* [HTTPS Everywhere](https://www.eff.org/https-everywhere) - Secure Connections

### ● &nbsp; Search Engine
* [Searx](https://searx.me/)  
Searx is an open-source, self-hostable, metasearch engine, aggregating the results of other search engines while not storing information about its users

* [Whoogle Search](https://github.com/benbusby/whoogle-search)  
Get Google search results, but without any ads, javascript, AMP links, cookies, or IP address tracking

### ● &nbsp; Antivirus
Windows defender should be more than enough for virus protection, combined with [Malwarebytes](https://www.malwarebytes.com/) as an extra precaution. You do not need paid antiviruses, nor is it recommended to pirate any paid antiviruses. But this Guide removes Windows Defender to prevent data collection. Even Malwarebytes can collect data. You don't need any Anti-Virus if you browse the internet safely. Install browser add-ons(Given in this guide) that protect you from malicious links.

* [av-comparatives.org](https://www.av-comparatives.org/) - Antivirus protection tests  
* [VirusTotal.com](https://www.virustotal.com/) - Web service that scans files and URLs with various anti-virus engines  
* [r/techsupport's guide on malware removal](https://www.reddit.com/r/techsupport/comments/33evdi/suggested_reading_official_malware_removal_guide/) - Reddit thread
* [The Case Against Anti-Virus Software](https://wiki.ameliorated.info/doku.php?id=antivirus) - AME Wiki

### ● &nbsp; VPN
[Mullvad](https://mullvad.net/en/)  
Mullvad is a fast and inexpensive VPN with a serious focus on transparency and security. They have been in operation since 2009. Mullvad is based in  Sweden

### ● &nbsp; DNS
* Encrypted DNS Resolvers  
  - [AdGuard](https://adguard.com/en/adguard-dns/overview.html)
  - [CZ.NIC](https://www.nic.cz/odvr/)
  - [Foundation for Applied Privacy](https://applied-privacy.net//services/dns/)

* Encrypted DNS Client
  - [Unbound](https://nlnetlabs.nl/projects/unbound/about/)  
  A validating, recursive, caching DNS resolver, supporting DNS-over-TLS, and has been independently audited.
  - [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy/wiki)  
  A DNS proxy with support for DNSCrypt, DNS-over-HTTPS, and Anonymized DNSCrypt, a relay-based protocol that the hides client IP address
 
### ● &nbsp; Firewall
* [Simplewall](https://www.henrypp.org/product/simplewall)  
Simple tool to configure Windows Filtering Platform (WFP) which can configure network activity on your computer.

* [Postmaster](https://safing.io/)  
Portmaster is a free and open-source application that puts you back in charge over all your computer's network connections.

### ● &nbsp; Password Manager
* [Bitwarden](https://bitwarden.com/) - Cloud/Self-host  
Bitwarden is among the easiest and safest solutions to store all of your logins and passwords while conveniently keeping them synced between all of your devices

* [KeePassXC](https://keepassxc.org/) - Local  
KeePassXC is a community fork of KeePassX, a native cross-platform port of KeePass Password Safe, with the goal to extend and improve it with new features and bugfixes to provide a feature-rich, fully cross-platform and modern open-source password manager.

### ● &nbsp;  Video
* [VLC](https://www.videolan.org/)  
A free and open-source, portable, cross-platform media player software and streaming media server developed by the VideoLAN project

* [MKVToolNix](https://mkvtoolnix.download/)  
A collection of tools for the Matroska media container format by Moritz Bunkus including mkvmerge

* Video Editor:
  - [Olive Video Editor](https://www.olivevideoeditor.org/)  
  Olive is a free non-linear video editor aiming to provide a fully-featured alternative to high-end professional video editing software
  
  - [Kdenlive](https://kdenlive.org/)  
  Kdenlive is an acronym for KDE Non-Linear Video Editor. It's free, and open-source and works on GNU/Linux, Windows and BSD. It's an intuitive and powerful multi-track video editor compatible with latest video technologies
  
  - [AstroFox](https://astrofox.io/)  
  Astrofox is a free, open-source motion graphics program that lets you turn your audio into custom, shareable videos
