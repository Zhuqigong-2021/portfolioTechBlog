import React, { useState } from "react";

const Button = () => {
  const data = [
    {
      projectDescription: "fullstack e-commerce react app",
      git: "https://github.com/Zhuqigong-2021/E-ComerceREACT",
      imgUrl:
        "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob3BwaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      go: "https://velvety-nasturtium-da270f.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "front end vue quiz app",
      git: "https://github.com/Zhuqigong-2021/vue-stackquiz",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1678903394367-5ee2f13f3960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      go: "https://illustrious-cascaron-fab96c.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "vanila css js app",
      git: "https://github.com/Zhuqigong-2021/E-ComerceREACT",
      imgUrl:
        "https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpbG18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      go: "https://moonlit-zabaione-76c398.netlify.app/",
      type: "Web App",
    },
    {
      projectDescription: "fullstack next AI prompt-shared app",
      git: "https://github.com/Zhuqigong-2021/Share-mind-next13.4",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1683120963435-6f9355d4a776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      go: "https://fastidious-gingersnap-e0bedc.netlify.app/",
      type: "Web App",
    },
  ];
  const [filteredData, setFilteredData] = useState(data);
  const filterMERN = data.filter((pro) => pro.type == "M.E.R.N");
  const filterWeb = data.filter((pro) => pro.type == "Web App");
  return (
    <div>
      <div class="flex space-x-6 text-[10px] mb-4">
        <button
          class="font-semibold bg-white rounded-md my-10 hover:bg-[#0f172a] hover:text-white px-4 py-1"
          onClick={() => setFilteredData(filterWeb)}
        >
          Web App
        </button>
        <button
          class="font-semibold bg-white rounded-md my-10 hover:bg-[#0f172a] hover:text-white px-4 py-1"
          onClick={() => setFilteredData(filterMERN)}
        >
          M.E.R.N
        </button>
        <button
          class="font-semibold rounded-md my-10 bg-[#0f172a] text-white px-4 py-1"
          onClick={() => setFilteredData(data)}
        >
          All
        </button>
      </div>
      <div class="flex flex-col lg:flex-row lg:space-x-7  max-w-[1500px] flex-wrap justify-center">
        {filteredData.map((pro, i) => (
          <div
            key={i}
            class="flex flex-col max-w-[300px] min-h-80 bg-white mb-10 lg:mb-20 rounded-md justify-center items-center "
          >
            <div class="relative m-4 mb-0 flex flex-col justify-center items-center h-72 rounded-t-md ">
              <a
                href={pro.go}
                class="overflow-hidden object-cover relative"
                target="_blank"
              >
                <img
                  src={pro.imgUrl}
                  alt=""
                  class="overflow-hidden object-cover relative rounded-t-md"
                  width="100%"
                  height="100%"
                />
              </a>

              {/* <!-- github and play --> */}
              <div class="absolute bottom-0 right-0 left-0 h-1/2 bg-[rgba(0,0,0,0.5)] flex justify-between items-center px-5 opacity-0 hover:opacity-100 z-10">
                <a
                  href={pro.git}
                  class="h-10 w-10 rounded-full flex items-center justify-center bg-white"
                  target="_blank"
                >
                  <img src={github} alt="gitlink" class="p-1 bg-white" />
                </a>

                <a
                  href={pro.go}
                  class="h-10 w-10 rounded-full flex items-center justify-center bg-white"
                  target="_blank"
                >
                  <div class="p-1 font-bold text-sm">Go</div>
                </a>
              </div>

              <h3 class="font-bold bg-white absolute bottom-0 px-4 pt-2 rounded-t-md z-20">
                {pro.type}
              </h3>
            </div>
            <p class="text-gray-500 text-sm">{pro.projectDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Button;
