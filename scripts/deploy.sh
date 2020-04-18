#!/usr/bin/env sh
autor="Bizhev"
dir="dist"

# остановить публикацию при ошибках
set -e

yarn generate
cd $dir

echo 'bizhev.github.io' > CNAME

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:$autor/$autor.github.io.git master:gh-pages
# git push -f git@github.com:$autor/$repo.git master:gh-pages
cd ..
rm -rf $dir
