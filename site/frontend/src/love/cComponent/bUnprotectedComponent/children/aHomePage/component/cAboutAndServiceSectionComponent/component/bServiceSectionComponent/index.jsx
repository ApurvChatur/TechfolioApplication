import { Separator } from "@/components/ui/separator";
import React from "react";


function ServiceSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {/* Service Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">WHAT WE PROVIDE</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Our Services</h1>
          </div>
          
          <div className="flex flex-wrap -m-4">
            {Redux.state.ReceivedObject?.Retrieve?.ServiceList?.map((each, index) => {
              return (
                <React.Fragment key={index} >
                  <div className="p-4 md:w-1/2">
                    <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <h2 className="text-white text-lg title-font font-medium">{each?.title}</h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">{each?.description}</p>
                        <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>

      <Separator/>
    </React.Fragment>
  );
}

export default ServiceSectionComponent;
