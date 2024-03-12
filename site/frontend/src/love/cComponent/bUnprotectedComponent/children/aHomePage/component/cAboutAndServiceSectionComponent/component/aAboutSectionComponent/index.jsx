import { Separator } from "@/components/ui/separator";
import React from "react";

function AboutSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {/* About Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">GET TO KNOW</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">About Us</h1>
          </div>

          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.image?.url} />
                </div>
                <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                  {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.title} 
                </h2>
                <p className="leading-relaxed text-base">
                  {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.description}
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.image?.url} />
                </div>
                <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                  {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.title} 
                </h2>
                <p className="leading-relaxed text-base">
                  {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />
    </React.Fragment>
  );
}

export default AboutSectionComponent;
