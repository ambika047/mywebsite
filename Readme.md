# My Portfolio Website To AWS EC2 
Here are Steps to publish AWS website to EC2
1. Create AWS EC2 instance
2. Login to instance
3. Update System
```code
sudo apt update -y && \
sudo apt upgrade -y && \
sudo apt install nginx -y && \
sudo systemctl enable nginx && \
sudo systemctl start nginx && \
sudo systemctl status nginx --no-pager
```

3. Install nginx
4. Clone this repo
5. Copy files to destination
6. Your website is now live from ip address



