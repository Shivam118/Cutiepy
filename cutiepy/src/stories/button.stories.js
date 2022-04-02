import React from "react";
import { storiesOf } from "@storybook/react";

import { Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8  } from "../components/Button";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return(
      <>
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      </>
  );
});
