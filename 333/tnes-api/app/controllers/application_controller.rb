class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :exception
   http_basic_authenticate_with name: ENV['BASIC_USER'] || "dhh", password: ENV['BASIC_PASS'] || "secret"
end
