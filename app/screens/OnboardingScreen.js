import { Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { setItem } from "../../utils/asyncStorage";

const OnbordingScreen = ({ navigation }) => {
  //   const navigation = useNavigation()
  const lastDone = async () => {
    try {
      navigation.navigate("LoginScreen");
      setItem("onboarded", "1");
    } catch (error) {
      console.log("Error @setItem :", error);
    }
  };
  return (
    <Onboarding
      onDone={lastDone}
      onSkip={() => navigation.navigate("LoginScreen")}
      pages={[
        {
          backgroundColor: "lightblue",
          image: (
            <Image
              source={require("../../assets/onboarding-img1.png")}
              width={300}
              height={300}
            />
          ),
          title: "Onboarding 1",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "orange",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Onboarding 2",
          subtitle: "You have any inquiries, we are avaible 24/7",
        },
        {
          backgroundColor: "#fd3b93",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Onboarding 3",
          subtitle: "Your satisfaction is our desire",
        },
      ]}
    />
  );
};

export default OnbordingScreen;
