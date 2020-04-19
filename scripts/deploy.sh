#!/usr/bin/env sh
autor="Bizhev"
dir="dist"

# остановить публикацию при ошибках
set -e

npm run build

cd $dir

echo 'bizhev.github.io' > CNAME

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:$autor/$autor.github.io.git master:master
# git push -f git@github.com:$autor/$repo.git master:gh-pages
cd ..
rm -rf $dir
