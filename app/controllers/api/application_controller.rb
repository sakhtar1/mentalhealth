module Api
	class ApplicationController < ActionController::API
		include ActionController::MimeResponds 
		include Knock::Authenticable
	end
end
