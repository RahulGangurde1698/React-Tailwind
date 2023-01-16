import { useState, useEffect } from "react"


export default function GetImages() {
  const [images, setImages] = useState([])


  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://thapatechnical.github.io/userapi/users.json`
      )
      const data = await response.json()
      console.log(data)
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <>
      <div className="container mx-auto px-5 2xl:px-0">
        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="flex flex-wrap">
            {
            
            images.map((image) => (

              <div class="p-4 sm:w-1/2 lg:w-1/3 py-12">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                      src={image.image} alt="blog" />
                  <div class="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                      <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                          2021</h2>
                      <h1 class="text-2xl font-semibold mb-3">{image.name}</h1>
                      <p class="leading-relaxed mb-3">{image.description}</p>
                      <div class="flex items-center flex-wrap ">
                          <a  href='' class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0" hre>Read More
                          </a>
                          <span
                              class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                 1.2K
                          </span>
                      </div>
                  </div>
              </div>
          </div>


            ))}
          </section>
        )}
      </div>
    </>
  )
}