class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :created_at
  # belongs_to :user
  # has_many :comments
end