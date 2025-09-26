# Git Basics Cheat Sheet

## Initial Setup
- `git config --global user.name "Your Name"`
- `git config --global user.email "your@email.com"`
- `git config --global init.defaultBranch main`
- `git config --global core.autocrlf true` (Windows)

## Starting a Repo
- `git init` → start version control in current folder
- `git remote add origin https://github.com/USERNAME/REPO.git` → link GitHub repo
- `git branch -M main` → rename default branch to main
- `git push -u origin main` → push first commit

## Everyday Workflow
- `git status` → check changes
- `git add .` → stage all changes
- `git commit -m "feat: add player input screen"` → commit with message
- `git push` → upload to GitHub
- `git pull` → sync down from GitHub

## Branching
- `git branch` → list branches
- `git checkout -b feature/my-feature` → create + switch to new branch
- `git checkout main` → go back to main
- `git merge feature/my-feature` → merge feature branch into main
- `git branch -d feature/my-feature` → delete branch after merge

## Undo / Reset
- `git restore file.html` → undo changes to a file
- `git reset HEAD file.html` → unstage a file
- `git log --oneline --graph` → view history nicely
