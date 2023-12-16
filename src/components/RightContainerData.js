

const RightContainerData = ({info}) => {

  if (!info) {
    return <div className='text-white'>Loading...</div>; 
  }

  const {snippet , statistics} = info;
  const {channelTitle , title , thumbnails} = snippet;


  return (
    <div className="max-w-full ">
      <div className="h-[360px] w-[320px] ">
        <div>
          <div className="">
            <img
              className="h-[250px] w-[320px] rounded-2xl "
              src={thumbnails?.high?.url}
              alt="thumbnail"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <div className="">
            <div className="flex justify-center items-center gap-3">
              <img
                className="h-[40px] w-10 rounded-[600px]  "
                src={thumbnails?.high?.url}
                alt="logo"
              />
              <div className="text-white ">
                <div className="font-medium text-md">
                  <p>
                    {title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center ml-12">
            <div className="text-gray-300">
              <p>{channelTitle}</p>
              <p>{statistics.viewCount} Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContainerData;
