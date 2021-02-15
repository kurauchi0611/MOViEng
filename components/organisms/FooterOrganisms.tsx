import { IconType } from "consts/IconConsts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import FooterButtonMolecules from "../molecules/FooterButtonMolecules";
import {
  GeneralDirection,
  GeneralFlex,
} from "../../styles/flex/GeneralFlexStyle";

const FooterContainer = styled.div`
  background: ${GeneralColorStyle.White};
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
`;

const FooterOrganisms = () => {
  const router = useRouter();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(router.pathname);
  }, [router]);

  const screenTransition = (url: string) => {
    router.push(url);
  };

  return (
    <FooterContainer>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <FooterButtonMolecules
          iconType={
            pathname === "/" ? IconType.HOME_BLACK : IconType.HOME_WHITE
          }
          text={"ホーム"}
          onClick={() => screenTransition("/")}
        />
        <FooterButtonMolecules
          iconType={
            pathname.includes("/reservation")
              ? IconType.LIST_BLACK
              : IconType.LIST_WHITE
          }
          text={"予約"}
          onClick={() => screenTransition("/reservation")}
        />
        <FooterButtonMolecules
          iconType={
            pathname.includes("/screening_venue")
              ? IconType.PIN_BLACK
              : IconType.PIN_WHITE
          }
          text={"上映会場"}
          onClick={() => screenTransition("/screening_venue")}
        />
        <FooterButtonMolecules
          iconType={
            pathname.includes("/my_page")
              ? IconType.USER_BLACK
              : IconType.USER_WHITE
          }
          text={"マイページ"}
          onClick={() => screenTransition("/my_page")}
        />
      </GeneralFlex>
    </FooterContainer>
  );
};

export default FooterOrganisms;
