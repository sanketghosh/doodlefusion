import { useLocation } from "react-router-dom";
import {
  DrawingPad,
  RoomHeader,
  SidePanel,
  EditorToolbar,
  FooterLink,
} from "../components";
import { useState } from "react";

export default function Room() {
  const [openPanel, setOpenPanel] = useState(false);
  const location = useLocation();
  const { username, roomName } = location.state;

  const handlePanelToggle = () => {
    setOpenPanel(!openPanel);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-3 relative">
        <RoomHeader
          username={username}
          openPanel={openPanel}
          handlePanelToggle={handlePanelToggle}
        />
        <EditorToolbar />
        <DrawingPad />
        <FooterLink className="py-3.5" />
        {openPanel ? (
          <SidePanel
            openPanel={openPanel}
            handlePanelToggle={handlePanelToggle}
            username={username}
            roomName={roomName}
          />
        ) : null}
      </div>
    </>
  );
}
