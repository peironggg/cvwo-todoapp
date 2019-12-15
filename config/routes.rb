Rails.application.routes.draw do
  root 'site#index'

  scope '/' do
    resources :todos
  end
end
