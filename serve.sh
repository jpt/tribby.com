npm run build
pm2 stop all
pm2 kill
pm2 start npm --name "tribby" --watch -- run start
