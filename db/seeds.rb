# User.create(first_name: 'bob', last_name: 'smith')
@rolesArr = ['student', 'teacher', 'admin', 'ta']
5.times do
  course = Course.create(
    title: Faker::Dessert.topping,
    desc: Faker::ChuckNorris.fact
  )

  5.times do
    user = User.create(
      first_name: Faker::FunnyName.name,
      last_name: Faker::Number.digit
    )

    Enrollment.create(
      role: @rolesArr.sample,
      user_id: user.id,
      course_id: course.id
    )
  end
end

puts 'data is seeded'
p User.all
p Course.all.length