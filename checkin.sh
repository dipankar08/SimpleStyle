cp ./dist/main.css simplestyle.css
echo '/*task goes here*/' | cat - simplestyle.css  > temp && mv temp simplestyle.css
git pull
git add *
git commit -m "automated chkin"
git push origin master
