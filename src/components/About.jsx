import React from 'react'

export const About = () => {
  return (
    <section className="bg-gray-700 py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-sky-400 mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">I am a data analyst and web developer from bharatpur, Nepal</h3>
            <p className="text-lg text-purple-400 mb-6">
              I'm a passionate analyst and developer with a strong focus on intuitive, responsive, and visually appealing web applications and data models.
            </p>
            <p className="text-lg text-purple-400 mb-6">
              With a background in both design and development, I combine creativity with technical expertise to deliver engaging user experiences.
            </p>
          </div>
          <div className="text-center md:text-right">
            <img src="/images/hero-image.png" alt="profile image" className="rounded-full h-64 w-64 mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
