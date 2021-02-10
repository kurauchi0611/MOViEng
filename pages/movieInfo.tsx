import React from "react";
import ScreeningInfo from "../components/templates/screeningInfo";

const movieInfo = () => {
  return (
    <ScreeningInfo
      description={"hogehogehoge"}
      image={
        "https://images-na.ssl-images-amazon.com/images/I/71yNCR5EjaL._AC_SX522_.jpg"
      }
      title={"ゴジラ"}
      city={"青森市"}
      other={"市民ホール"}
      prefecture={"青森県"}
      good={10}
      wantWatch={40}
      openTime={"15時10分"}
      startTime={"15時20分"}
    />
  );
};

export default movieInfo;
