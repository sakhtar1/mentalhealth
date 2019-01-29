class User < ApplicationRecord
	has_secure_password
	# has_many :articles
	validates :email, presence: true, uniqueness: true
    validates :password, presence: true, on: :create

end
