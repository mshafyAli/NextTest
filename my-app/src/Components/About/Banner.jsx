import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-16 relative">
      <div className="w-full bg-secondary my-2 h-[18rem] flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
      </div>

      <div className="md:w-[70%] w-full mx-auto">
        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-secondary">
              How do we work?
            </h2>
            <p className="mt-4  text-gray-700">
              We have streamlined our process to make it as convenient as
              possible for you. Turning our service highly accessible and
              affordable for your sake.
            </p>
            <p className="mt-2  text-gray-700">
              We tackle your publication challenges like it was never there
              before. Having a team of highly professional and qualified
              experts, we proudly offer you services like nowhere else. We have
              catered to a diverse range of work such as academic publications
              for students and press releases for organizations, celebrities,
              entrepreneurs, etc. We tailor our services as per your needs to
              provide you with the best solution at the lowest cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary">
              Reach Out To Us
            </h2>
            <p className="mt-4 text-gray-700">
              Contact our customer support via email, live chat, or fill out the
              order form to begin your journey. Let us know your queries and
              learn more about our services to set your goals according to your
              budget and make an ideal plan for your achievement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary">
              Submit Your Request
            </h2>
            <p className="mt-4  text-gray-700">
              Submit your requirements and expectations for a quick analysis by
              our experts for a budget estimate. They will thoroughly analyze it
              to formulate the best and most customized plan of action that fits
              all your needs and budget.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary">
              Connect With Expert
            </h2>
            <p className="mt-4  text-gray-700">
              After the quick analysis, you will get connected with a
              professional who can tackle all your challenges and provide you
              with the best guidance and results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary">
              Direct Communication
            </h2>
            <p className="mt-4  text-gray-700">
              After an agreement, you will be able to directly communicate with
              your assigned expert if need be. We ensure your satisfaction in
              every way possible with our comprehensive support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary">
              Periodic Updates
            </h2>
            <p className="mt-4  text-gray-700">
              We provide progress updates on your publication process through
              direct ongoing communication via email or live chat. Stay informed
              about the progress throughout the process.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-secondary">
              Success is Just a Click Away!
            </h2>
            <p className="mt-4  text-gray-700">
              What are you waiting for? Hurry up and place your order NOW to get
              the best guidance and get your articles, papers, and press
              releases published TODAY!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
