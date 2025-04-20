const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex item-center justify-between">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <span className="text-sm text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-mySkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              20-04-2025
            </span>
          </div>
          <p></p>
        </div>
        <div className="bg-myPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              20-04-2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat! Est eum vel tempore inventore.
          </p>
        </div>
        <div className="bg-myYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              20-04-2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat! Est eum vel tempore inventore.
          </p>
        </div>
        <div className="bg-mySkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">
              20-04-2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat! Est eum vel tempore inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
