# We need ruby 3.0.0. I found this from docker hub
FROM ruby:3.0.0

EXPOSE 3000

WORKDIR /usr/src/app

# Install node, found from the internet
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt install -y nodejs

# Install yarn, found from readme
RUN npm install -g yarn

# Install the correct bundler version
RUN gem install bundler:2.2.11

# Copy all of the content from the project to the image
COPY . .

# Install all dependencies
RUN bundle install

# We pick the production guide mode since we have no intention of developing the software inside the container.
# Run database migrations by following instructions from README
RUN rails db:migrate RAILS_ENV=production

# Precompile assets by following instructions from README
RUN rake assets:precompile 

# And finally the command to run the application
CMD ["rails", "s", "-e", "production"]