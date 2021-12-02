Rails.application.routes.draw do
  root 'users#index'

  resources :users
  resources :courses do 
    resources :enrollments
  end
end
