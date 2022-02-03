import React from "react";
import {View} from 'react-native';
import { SvgXml } from "react-native-svg";

 const SvgImage = ({containerStyle,style}) => {

  const svgMarkup = containerStyle.icon_name

  const SvgImage = () => <SvgXml xml={svgMarkup} width= {`${containerStyle.width}`} height = {`${containerStyle.height}`} />;

  return (
    <View style = {{...style}}>
         <SvgImage />
    </View>
 
  );
}

export default SvgImage;