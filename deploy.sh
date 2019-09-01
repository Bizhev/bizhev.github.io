#!/usr/bin/env sh

autor="Bizhev"
repo=""
dir="dist"


# остановить публикацию при ошибках
set -e

yarn generate
cd $dir

# echo 'www.example.com' > CNAME


git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:$autor/$autor.github.io.git master
# git push -f git@github.com:$autor/$repo.git master:gh-pages
cd ..
rm -rf $dir
