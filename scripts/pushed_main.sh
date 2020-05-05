#!/usr/bin/env sh
branch="dev" # main branch
npm run lint --fix
current_branch=$(git branch --show-current);

# STOP error
set -e
git add .
git commit -m "$1"
git push origin "$current_branch"
git checkout $branch
git pull origin $branch
git merge "$current_branch"
git push -u origin $branch
