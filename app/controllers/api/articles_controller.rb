module Api
	class ArticlesController < ApplicationController
		before_action :set_article, only: [:show, :update, :destroy]

		def index
        	render json: Article.all
    	end

    	def create
	        @article = Article.create(article_params)
	        if @article.save
	            render json: @article
	        else
	            render json: {message: @article.errors }, status: 400
	        end
    	end

	    def show
	        render json: @article
	    end

	     def update
	        if @article.update(article_params)
	            render json: @article
	        else
	            render json: {message: article.errors }, status: 400
	        end
    	end

		def destroy
			if @article.destroy
	            render json: @article
	        else
	            render json: {message: "Try again"}, status: 400
	        end
		end

		private

			def set_article
				@article = Article.find_by(id: params[:id])
			end
			def article_params
	       	 params.require(:article).permit(:title, :content, :author, :user_id, :created_at, :image)
	    	end

	end
end