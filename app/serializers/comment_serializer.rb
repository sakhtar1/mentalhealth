class CommentSerializer < ActiveModel::Serializer
  attributes :name, :description, :article_id
  # belongs_to :article

end