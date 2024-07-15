import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/path-to-profile-pic.jpg"
                alt="Profile Picture"
                width={48}
                height={48}
              />
            </div>
            <div>
              <div className="text-gray-900 text-lg font-semibold">
                Hello Maria
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xl font-bold text-gray-900">
              What are you looking for today?
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/path-to-rides-icon.png"
                    alt="Rides"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">Rides</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/path-to-eats-icon.png"
                    alt="Eats"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">Eats</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/path-to-pantry-icon.png"
                    alt="Pantry"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">Pantry</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/path-to-transit-icon.png"
                    alt="Transit"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">Transit</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/path-to-scooter-icon.png"
                    alt="Scooter"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">Scooter</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/path-to-connect-icon.png"
                    alt="Connect"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-700">Connect</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-gray-900 font-semibold">Go again</div>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/path-to-uberx-icon.png"
                    alt="UberX"
                    width={24}
                    height={24}
                  />
                  <div>
                    <div className="text-gray-700">UberX</div>
                    <div className="text-gray-500 text-sm">Work</div>
                  </div>
                </div>
                <div className="text-gray-500">$3.95 - 5 mins away</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/path-to-premium-icon.png"
                    alt="Premium"
                    width={24}
                    height={24}
                  />
                  <div>
                    <div className="text-gray-700">Premium</div>
                    <div className="text-gray-500 text-sm">Bay Club</div>
                  </div>
                </div>
                <div className="text-gray-500">$3.95 - 5 mins away</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
