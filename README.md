# One-Line Office Joke

[![Competition](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/anaughtyboy/makefun-office-jokes/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/anaughtyboy/makefun-office-jokes/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Entry for [Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a) on make.fun — one joke about office life, a single line under 200 characters.

## The joke

> We have a 'no meeting Friday' policy, which we review every Friday in a meeting.

**80 characters** — one line, nothing else.

## How it works

`main.ts` holds the joke as a string, checks it (1–199 characters, single line, not only whitespace, no leading or trailing whitespace), writes it exactly to `entry.txt` in the output directory with no trailing newline, and reads the file back to confirm it matches byte for byte. Two runs produce identical bytes.
