class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author
  # belongs_to :user
  # has_many :comments
end