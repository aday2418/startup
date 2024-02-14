while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying Next.js app $service to $hostname with $key\n"

# Step 1: Adjusted for Next.js
printf "\n----> Build the Next.js application\n"
rm -rf .next out # Adjust based on whether you're deploying a static site or SSR
npm install # Installs dependencies, including Next.js
npm run build # Builds the Next.js app
# If deploying a static site, uncomment the next line
# npm run export # Exports to 'out' for static sites

# Adjust the following line based on your deployment type (SSR or static)
cp -r .next/* build # For SSR
# cp -r out/* build # For static sites, uncomment this line and comment the line above

cp -r pages service public build # Adjust as needed for your app's structure

# Steps 2 to 5 remain largely the same, but ensure your deployment target is properly set up for SSR or static serving

printf "\n----> Clearing out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}:
ENDSSH

printf "\n----> Copy the distribution package to the target\n"
scp -i "$key" -r ./* ubuntu@$hostname:services/$service

printf "\n----> Deploy the service on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
bash -i
cd services/${service}
npm init -y
npm install # Ensure dependencies for running the app are installed
# For SSR, use pm2 or another process manager to start your Next.js app
nvm install node
npm install -g pm2
pm2 restart ${service} # This may need adjustment based on your setup
# For static sites, ensure your web server is configured to serve the 'out' directory
ENDSSH

printf "\n----> Removing local copy of the distribution package\n"
rm -rf build
