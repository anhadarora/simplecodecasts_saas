# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
  :address        => 'smtp.sendgrid.net',
  :port           => '587',
  :authentication => :plain,
  :user_name      => 'YW5oYWRhcm9yYUBnbWFpbC5jb20=',  #ENV['app47447227@heroku.com'],
  :password       => 'SDM3NDY0NzM=', #ENV['H3746473'],
  :domain         => 'lit-dawn-43344.herokuapp.com',
  :enable_starttls_auto => true
}