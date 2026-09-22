---
title: Telestop
subtitle: Raspberry Pi telemarketer screening for a landline
tools: ["Python", "Asterisk", "Raspberry Pi", "SQLite"]
image: /assets/images/telestop-card.svg
github_repo: https://github.com/RL-Charles/Telestop
order: 2
---

Telestop screens calls to a home landline before the house phone rings. It uses a Grandstream HT813 gateway and a Raspberry Pi 5 running Asterisk, Python FastAGI, and SQLite.

![Landline connected to the Grandstream HT813 FXO port, house phone connected to its FXS port, and Raspberry Pi connected over Ethernet for call screening](/assets/images/telestop-call-path.svg)

## What each part does

- **Grandstream HT813:** Connects the PSTN wall line to its FXO/LINE port and the house phone to its FXS/PHONE port. It exchanges SIP calls with the Pi over Ethernet.
- **Raspberry Pi:** Asterisk answers and routes the call; Python FastAGI checks trusted callers; SQLite stores trusted numbers and call results.
- **Call screening:** Trusted callers ring through. Unknown callers hear a prompt and have eight seconds to press `1`; a wrong or missing digit disconnects the call before the house phone rings. A successful response trusts that number for future calls.
