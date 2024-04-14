import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Text } from "react-native";

export const RegularText = ({ children, classNames }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "DubaiW23-Medium": require("../../assets/fonts/DubaiW23-Medium.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text className={classNames}>{children}</Text>;
  }

  return (
    <Text className={classNames} style={{ fontFamily: "DubaiW23-Medium" }}>
      {children}
    </Text>
  );
};
