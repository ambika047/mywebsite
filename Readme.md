# My Portfolio Website To AWS EC2 
Here are Steps to publish AWS website to EC2
1. Create AWS EC2 instance
2. Login to instance
3. Update System and install nginx
```code
sudo apt update -y && \
sudo apt upgrade -y && \
sudo apt install nginx -y && \
sudo systemctl enable nginx && \
sudo systemctl start nginx && \
sudo systemctl status nginx --no-pager
```
4. Clone this repo
```code
cd ~
git clone https://github.com/ambika047/mywebsite.git
```
5. Copy files to destination
First open mywebsite form `cd mywebsite` and giv e this commands
```code
sudo rm -rf /var/www/html/* && \
sudo cp -r /home/ubuntu/mywebsite/* /var/www/html/ && \
sudo chown -R www-data:www-data /var/www/html && \
sudo chmod -R 755 /var/www/html && \
sudo systemctl restart nginx && \
sudo systemctl status nginx --no-pager
```
6. Change Security Group

Ensure the EC2 Security Group allows:

| Type | Port |
|--------|------|
| SSH | 22 |
| HTTP | 80 |
| HTTPS | 443 (Optional) |

7. Your website is now live from ip address

## Tech Stack

- AWS EC2
- Ubuntu Linux
- Nginx
- HTML
- CSS
- JavaScript

## Author

**Ambika Baniya Bhandari**  
AWS Cloud & IT Operations Enthusiast
