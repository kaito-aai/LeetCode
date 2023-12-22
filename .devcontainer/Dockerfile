FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

ENV RUBY_VERSION=3.2.2

RUN gpg2 --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
RUN \curl -sSL https://get.rvm.io | bash -s stable
RUN sudo usermod -aG rvm node
RUN bash -c "source /etc/profile.d/rvm.sh && rvm install ${RUBY_VERSION} && rvm use ${RUBY_VERSION}"
