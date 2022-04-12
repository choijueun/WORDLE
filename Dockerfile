# BASE IMAGE
FROM --platform=linux/amd64 centos:7

# META DATA
LABEL maintainer="songjueun815@gmail.com"
LABEL project="K4RDLE"

# Update yum packages
RUN yum -y update
RUN yum -y upgrade

# Install
RUN yum -y install tar unzip vi vim curl curl-devel git

# For Python Install
RUN yum -y install wget
RUN yum -y install gcc gcc-c++
RUN yum -y install zlib zlib-devel
RUN yum -y install libffi-devel
RUN yum -y install openssl openssl-devel

RUN yum -y install python-devel

# Install Python
RUN wget https://www.python.org/ftp/python/3.10.4/Python-3.10.4.tgz
RUN tar xzf Python-3.10.4.tgz
RUN rm -r Python-3.10.4.tgz
RUN Python-3.10.4/configure --enable-optimizations
RUN make altinstall

# PORT
EXPOSE 8008
