Rails.application.routes.draw do
  root 'site#index'
  scope '/' do
    resources :todos
  end
  match "*path", to: 'site#index', via: :all
end
