git stash
git checkout gh-pages
cp -r staging/* .
git add --all
git commit -m Deploying to github.
git push origin gh-pages
git checkout master
git stash pop