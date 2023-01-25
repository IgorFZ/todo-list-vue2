# todo-list

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
## If you have errors running the tests, try:
```
# Download binary openssl packages from Impish builds
wget http://security.ubuntu.com/ubuntu/pool/main/o/openssl/openssl_1.1.1f-1ubuntu2.16_amd64.deb
wget http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl-dev_1.1.1f-1ubuntu2.16_amd64.deb
wget http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb
```
```
# Install downloaded binary packages
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb
sudo dpkg -i libssl-dev_1.1.1f-1ubuntu2.16_amd64.deb
sudo dpkg -i openssl_1.1.1f-1ubuntu2.16_amd64.deb
```
