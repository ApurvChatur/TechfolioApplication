import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";


function ProjectSectionComponent({ Redux }) {
  const [activeProjectGroup, setActiveProjectGroup] = useState("Andromeda Organisation")

  return (
    Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve &&  
    <React.Fragment>
      {/* Project Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">OUR PROJECTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-2">{Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.title}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.description}</p>
          </div>          

          <div className="flex mx-auto flex-wrap mb-10">
            {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.projectGroups?.map((each, index) => (
              <a 
                key={index}
                className={`uppercase sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider
                  ${activeProjectGroup === each.title ? "bg-gray-800 border-indigo-500 text-white rounded-t" : "border-gray-800 hover:text-white"}
                `}
                onClick={() => setActiveProjectGroup(each?.title)}
              >
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>{each.title}
              </a>
            )) }
          </div>
          
          {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.projectGroups?.map((each, index) => (
            <React.Fragment key={index}>
              <div className={`flex flex-wrap text-center bg-gray-800 bg-opacity-60 px-4 py-6 rounded-lg ${activeProjectGroup === each.title ? "" : "hidden"}`}>
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-xl font-medium title-font mb-4 text-white">{each.title}</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{each.description}</p>
                </div>
                {each?.projects?.map((each1, index1) => (
                  <React.Fragment key={index1}>
                    <div className="p-4 w-full md:w-1/3 text-left">
                      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={each1?.image?.url} alt="blog" />
                        <div className="p-6">
                          <h1 className="title-font text-lg font-medium text-white mb-1">{each1.title}</h1>
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-3 uppercase">{each1.subtitle}</h2>
                          <p className="leading-relaxed mb-3">{each1.description}</p>
                          <div className="flex items-center flex-wrap ">
                            <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>1.2K
                            </span>
                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          )) }

        </div>
      </section>

      <Separator/>
    </React.Fragment>
  );
}

export default ProjectSectionComponent;
