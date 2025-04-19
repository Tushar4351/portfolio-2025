import React from 'react';



interface SingleProjectProps {
  project: Project;
}

const SingleProjectContainer = ({ project }: SingleProjectProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="bg-gray-100 rounded-xl overflow-hidden mb-8">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-6">{project.fullDescription}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Category</h2>
          <p className="text-gray-700 mb-6">{project.category}</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project Details</h3>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Client</p>
            <p className="font-medium">{project.details.client}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">{project.details.date}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium">{project.details.role}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech) => (
                <span key={tech} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContainer;