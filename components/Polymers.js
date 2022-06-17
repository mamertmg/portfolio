import React from 'react'

function Polymers() {
  return (
    <div>
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 class="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div
              class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            >
              <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
              <h5 class="text-lg font-bold">Termoplastics</h5>
              <p class="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
  
            <div
              class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
            >
              <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
              <h5 class="text-lg font-bold">Thermosets</h5>
              <p class="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
  
            <div
              class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
            >
              <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
              <h5 class="text-lg font-bold">Sustainability</h5>
              <p class="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          <div class="my-16">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-gray bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div>
        </div>
    </div>
  )
}

export default Polymers