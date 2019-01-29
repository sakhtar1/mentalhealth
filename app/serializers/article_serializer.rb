class ArticleSerializer < ActiveModel::Serializer
  attributes :title, :content, :author
  # belongs_to :user
  # has_many :comments
end