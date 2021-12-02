class EnrollmentsController < ApplicationController
  before_action :set_course

  def index
    @enrollments = @course.enrollments
    render component: 'Enrollments', props: { enrollments: @enrollments }
  end

  def show
    @enrollment = @course.enrollments.find(params[:id])
    render component: 'Enrollment', props: { enrollment: @enrollment }
  end

  def new
    @users = User.all - @course.users
    @enrollment = @course.enrollments.new
    render component: "EnrollmentNew", props: { course: @course, enrollment: @enrollment, users: @users }
  end

  def edit
  end

  def update

  end

  def create
    @enrollment = @course.enrollments.new(enrollment_params)
    if @enrollment.save
      redirect_to course_enrollments_path(@course)
    else
      render :new
    end
  end

  def destroy
    @enrollment = @course.enrollments.find(params[:id])
    @enrollment.destroy
    redirect_to course_enrollments_path(@course)
  end

  private 
    def set_course 
      @course = Course.find(params[:course_id])
    end

    def enrollment_params
      params.require(:enrollment).permit(:role, :user_id)
    end
end
