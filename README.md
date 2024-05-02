# BrightWeb
This is the repository of the Bright Web website

# Installation and deployment manual
The container should be launched on port 8000 !!!

Below, I provided a docker build command instance to do port forwarding for the container

```shell
git clone https://github.com/seelennebel/BrightWeb.git

cd BrightWeb

docker build -t your_nickname/brightweb:1.0 .

docker run -p 8000:8080 image_ID

```

# Default user:
password: 123456

login: user

# How to use an admin account to add new products

1) visit http://localhost:8000/admin
2) Fulfill all fields
3) Submit
4) If the operation was successful, it will show the product object that back end created
5) Navigate back to the main page and check the "Products" section



