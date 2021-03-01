import GeneralText, {
  GeneralFontSize,
  GeneralFontWeight,
} from "../../../styles/typography/GeneralTextStyle";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import { IconType } from "consts/IconConsts";
import CardAtoms from "../../../components/atoms/CardAtoms";
import IconAtoms from "components/atoms/IconAtoms";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "utils/firebase/firebase";
import { GeneralSpacer } from "../../../styles/spacer/GeneralSpacerStyle";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../../../styles/flex/GeneralFlexStyle";

const MyPage = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const [userName, setUserName] = useState("");
  const [good, setGood] = useState(0);
  const [wantWatch, setWantWatch] = useState(0);
  const [resavation, setResavation] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const getUser = async () => {
      const user = await db.collection("users").doc(userId).get();
      const userData = user.data();
      setUserName(userData.name);
      setGood(userData.good);
      setWantWatch(userData.wantWatch);

      let getMovies = [];
      await db
        .collection("users")
        .doc(userId)
        .collection("reservation")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (doc) => {
            console.log(doc.data());
            getMovies.push({ ...doc.data(), id: doc.id });
          });
          setResavation(getMovies);
        });
    };

    getUser();
  }, [userId]);

  const insetClagit = (id) => {
    router.push(`/my_page/${userId}/payment_registration?movie=${id}`);
  }

  return (
    <>
      <GeneralFlex
        direction={GeneralDirection.ROW}
        justify={GeneralJustify.SPACE_AROUND}
        alignItems={GeneralAlignItems.CENTER}
      >
        <div>
          <GeneralText fontSize={GeneralFontSize.SIZE_16}>
            {userName}
          </GeneralText>

          <GeneralFlex direction={GeneralDirection.ROW}>
            <GeneralFlex direction={GeneralDirection.ROW}>
              <IconAtoms iconType={IconType.MAN} size={16} color={"#469CDA"} />

              <GeneralSpacer horizontal={4} />

              {String(wantWatch)}
            </GeneralFlex>

            <GeneralSpacer horizontal={12} />

            <GeneralFlex direction={GeneralDirection.ROW}>
              <IconAtoms
                iconType={IconType.HEART}
                size={16}
                color={"#ED4747"}
              />

              <GeneralSpacer horizontal={4} />

              {String(good)}
            </GeneralFlex>
          </GeneralFlex>
        </div>

        <ButtonMolecules
          text={"編集"}
          textColor={"#333333"}
          btnColor={GeneralColorStyle.Grey}
          width={132}
          iconType={IconType.PEN}
          onClick={() => console.log("編集")}
        />
      </GeneralFlex>

      <hr />
      <GeneralText
        fontSize={GeneralFontSize.SIZE_16}
        fontColor={`#BDBDBD`}
        fontWeight={GeneralFontWeight.BOLD}
      >
        チケット
      </GeneralText>

      {resavation.map((movie, index) => {
        return (
          <CardAtoms width={376} raised={true} onClick={() => insetClagit(movie.id)}>
            <GeneralFlex
              direction={GeneralDirection.ROW}
              justify={GeneralJustify.SPACE_BETWEEN}
              alignItems={GeneralAlignItems.CENTER}
            >
              <GeneralText
                fontSize={GeneralFontSize.SIZE_16}
                fontColor={GeneralColorStyle.Black}
                fontWeight={GeneralFontWeight.BOLD}
              >
                {movie.movie.title}
              </GeneralText>

              <GeneralText
                fontSize={GeneralFontSize.SIZE_20}
                fontColor={GeneralColorStyle.Black}
              >
                18:20
              </GeneralText>
            </GeneralFlex>

            <GeneralText fontSize={GeneralFontSize.SIZE_12} fontColor={`#666`}>
              青森・青森市民ホール
            </GeneralText>
            <GeneralText fontSize={GeneralFontSize.SIZE_12} fontColor={`#666`}>
              2020年12月19日（土）
            </GeneralText>
          </CardAtoms>
        );
      })}

      <GeneralFlex direction={GeneralDirection.ROW}>
        <IconAtoms
          iconType={IconType.COIN}
          size={24}
          color={GeneralColorStyle.Black}
        />
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontColor={GeneralColorStyle.Black}
          fontWeight={GeneralFontWeight.BOLD}
        >
          支払い履歴
        </GeneralText>
      </GeneralFlex>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <IconAtoms
          iconType={IconType.LOGOUT}
          size={24}
          color={GeneralColorStyle.Black}
        />
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontColor={GeneralColorStyle.Black}
          fontWeight={GeneralFontWeight.BOLD}
        >
          ログアウト
        </GeneralText>
      </GeneralFlex>
      <GeneralFlex direction={GeneralDirection.ROW}>
        <IconAtoms
          iconType={IconType.WITHDRAWAL}
          size={24}
          color={GeneralColorStyle.Black}
        />
        <GeneralText
          fontSize={GeneralFontSize.SIZE_16}
          fontColor={GeneralColorStyle.Black}
          fontWeight={GeneralFontWeight.BOLD}
        >
          退会
        </GeneralText>
      </GeneralFlex>
    </>
  );
};

export default MyPage;
