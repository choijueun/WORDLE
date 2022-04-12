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
RUN wget https://www.python.org/ftp/python/3.8.9/Python-3.8.9.tgz
RUN tar xzf Python-3.8.9.tgz
RUN rm -r Python-3.8.9.tgz
RUN Python-3.8.9/configure --enable-optimizations
RUN make altinstall

# Add 3.7 to the available alternatives
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3.7 1
# Set python3.7 as the default python
RUN update-alternatives --set python /usr/bin/python3.7

# PORT
EXPOSE 8008
