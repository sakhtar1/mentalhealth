module Api
    class UsersController < ApplicationController
       
        before_action :get_user, except: [:create]

        def show
            if current_user?
                render json: @user, status: 200            
            else
                render json: {message: "Invalid Request"}, status: 401
            end
        end

        def create
            @user = User.create(user_params)
            if @user.valid? then 
                render json: @user, status: 200
            else
                render json: {message: @user.errors.full_messages}, status: 400
            end
        end 

        def update
            if !current_user?
                render json: {message: "Invalid Request"}, status: 401
            else
                render json: @user, status: 200
            end
        end 
        
        private

        def get_user
            @user = User.find_by(:id => params[:id])
        end

        def current_user?     
            @user.id == current_user.id
        end

        def user_params
          params.require(:user).permit(:email, :password)
        end
        
    end
end