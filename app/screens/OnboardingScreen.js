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
          title: "Welcome",
          subtitle: "Welcome To Opex Room",
        },
        {
          backgroundColor: "orange",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Seamless Chats with colleagues",
          subtitle: "Enjoy your discussion without worries",
        },
        {
          backgroundColor: "#fd3b93",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Satisfied",
          subtitle: "Your satisfaction is our desire",
        },
      ]}
    />
  );
};

export default OnbordingScreen;
