ssh root@142.93.235.31 <<EOF
		cd app/UVB-svelte
		pm2 stop all
		git pull
		npm install
		npm run build
		pm2 start __sapper__/build
EOF
