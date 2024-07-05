# Dockerfile
# Usa la imagen base de Apache
FROM tomcat:9-jre8
COPY . /usr/local/tomcat/webapps/
